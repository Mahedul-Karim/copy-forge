import { RouterProvider } from "react-router";
import { router } from "./routes/routes";
import { useServer } from "./hooks/useServer";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase.config";
import { useDispatch } from "react-redux";
import { clearLoading, setUser } from "./store/slice/user";

function App() {
  const dispatch = useDispatch();

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
    </>
  );
}

export default App;
