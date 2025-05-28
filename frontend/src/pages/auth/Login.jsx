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
} from "firebase/auth";
import { auth } from "@/config/firebase.config";
import { Loader } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

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
          >
            <img src="/google.svg" alt="" className="size-5" />
            Google
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
