import { RouterProvider } from "react-router";
import { router } from "./routes/routes";
import { useServer } from "./hooks/useServer";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase.config";
import { useDispatch, useSelector } from "react-redux";
import { clearLoading, degradeStats, setUser } from "./store/slice/user";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner";

function App() {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  const { mutate } = useServer({
    onSuccess: (data) => {
      if (!data.user) {
        dispatch(clearLoading());
        return;
      }

      dispatch(
        setUser({ user: data.user, stats: data?.stats, token: data?.token })
      );
    },
    onError: () => {
      dispatch(clearLoading());
    },
  });

  const { mutate: autoReneweCheck } = useServer({
    onSuccess: (data) => {
      if (data?.isAutoRenewed) {
        return toast.success(data.message);
      }
      if (data?.isDowngraded) {
        dispatch(degradeStats());
        toast.warning(data.message);
      }
    },
    onError: (err) => {
      toast.warning(err.message);
    },
  });

  useEffect(() => {
    if (user) {
      const options = {
        method: "POST",
      };

      autoReneweCheck({
        endpoint: "user/stats",
        options,
      });
    }
  }, [user]);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      const providerUser = firebaseUser?.providerData?.[0];

      if (!providerUser) {
        dispatch(clearLoading());
        return;
      }

      const email = providerUser.email;

      mutate({
        endpoint: `user/me`,
        options: {
          method: "POST",
          data: { email },
        },
      });
    });

    return () => unSubscribe();
  }, []);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster richColors position="bottom-right" />
    </>
  );
}

export default App;
