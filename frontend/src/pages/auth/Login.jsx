import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FloatingInput from "@/components/form/FloatingInput";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import {
  browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "@/config/firebase.config";
import { Loader } from "lucide-react";
import { api } from "@/lib/api";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/slice/user";
import { useToast } from "@/hooks/useToast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { error } = useToast();

  /**signin with email and password */
  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      await setPersistence(auth, browserSessionPersistence);

      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate();
  };

  /**signin with google */
  const { mutate: googleMutate, isPending: isLoading } = useMutation({
    mutationFn: async () => {
      await setPersistence(auth, browserSessionPersistence);
      const { user } = await signInWithPopup(auth, googleProvider);

      const email = user?.providerData?.[0]?.email;
      const fullName = user.providerData[0].displayName;

      const options = {
        method: "POST",
        data: {
          email,
          fullName,
        },
      };

      const data = await api({ endpoint: "user/google", options });

      return data;
    },
    onSuccess: (data) => {
      dispatch(
        setUser({ user: data?.user, stats: data?.stats, token: data?.token })
      );

      navigate("/");
    },
    onError: (err) => {
      error(err.message);
    },
  });

  const googleSignin = () => {
    googleMutate();
  };

  return (
    <Card className="border-none bg-transparent shadow-none">
      <CardHeader>
        <CardTitle className="text-text-primary text-xl xs:text-3xl">
          Sign in to your account
        </CardTitle>
        <CardDescription className="text-text-secondary text-sm xs:text-base">
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action="" onSubmit={handleSubmit} className="space-y-6">
          <FloatingInput
            type="text"
            label={"Email Address"}
            disabled={isPending}
            hasValue={!!email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FloatingInput
            type="password"
            label={"Password"}
            disabled={isPending}
            hasValue={!!password}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button className="w-full h-10 font-semibold" disabled={isPending}>
            {isPending && <Loader className="animate-spin" />} Sign In
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex-col">
        <div className="flex items-center gap-2 w-full">
          <div className="h-[1.5px] border border-solid border-border grow" />
          <p className="text-text-primary/50">OR</p>
          <div className="h-[1.5px] border border-solid border-border grow" />
        </div>
        <div className="my-4 w-full">
          <Button
            variant="outline"
            className="bg-transparent w-full border-border flex items-center gap-2 dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent text-text-primary/70 hover:text-text-primary/70"
            onClick={googleSignin}
            disabled={isLoading}
          >
            <img src="/google.svg" alt="" className="size-5" />
            {isLoading ? 'Signing in...' : "Google"}
          </Button>
        </div>
        <p className="text-sm font-medium text-text-primary">
          Don&apos;t have an account?{" "}
          <Link to="/auth/sign-up" className="text-yellow-500">
            Create One
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default Login;
