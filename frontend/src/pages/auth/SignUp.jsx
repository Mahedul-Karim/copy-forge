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
import { useToast } from "@/hooks/useToast";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/slice/user";
import { Loader } from "lucide-react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase.config";
import { api } from "@/lib/api";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { success, warning, error } = useToast();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      await createUserWithEmailAndPassword(auth, email, password);

      const options = {
        method: "POST",
        data: {
          email,
          fullName,
        },
      };

      const data = await api({ endpoint: "user", options });

      return data;
    },
    onSuccess: (data) => {
      setFullName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      success(data?.message);
      dispatch(setUser({ user: data?.user, stats: data?.stats }));
      navigate("/");
    },
    onError: (err) => {
      error(err.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return warning("Password and confirm password must be same");
    }

    if (!fullName || !email) {
      return warning("All fields are required!");
    }

    mutate();
  };

  return (
    <Card className="border-none bg-transparent shadow-none">
      <CardHeader>
        <CardTitle className="text-text-primary text-xl xs:text-3xl">
          Create Account
        </CardTitle>
        <CardDescription className="text-text-secondary text-sm xs:text-base">
          Provide your valid information
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action="" onSubmit={handleSubmit} className="space-y-6">
          <FloatingInput
            type="text"
            label={"Full Name"}
            value={fullName}
            hasValue={!!fullName}
            onChange={(e) => setFullName(e.target.value)}
            disabled={isPending}
          />
          <FloatingInput
            type="email"
            label={"Email Address"}
            value={email}
            hasValue={!!email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isPending}
          />
          <FloatingInput
            type="password"
            label={"Password"}
            value={password}
            hasValue={!!password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isPending}
          />
          <FloatingInput
            type="password"
            label={"Confirm Password"}
            value={confirmPassword}
            hasValue={!!confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            disabled={isPending}
          />
          <Button className="w-full h-10 font-semibold" disabled={isPending}>
            {" "}
            {isPending && <Loader className="animate-spin" />} Sign Up
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex-col">
        <p className="text-sm font-medium text-text-primary">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-yellow-500">
            Login
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default SignUp;
