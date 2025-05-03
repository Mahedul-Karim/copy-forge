import React from "react";
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
import { Link } from "react-router";

const SignUp = () => {
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
        <form
          action=""
          onSubmit={(e) => e.preventDefault()}
          className="space-y-6"
        >
          <FloatingInput type="text" label={"Full Name"} />
          <FloatingInput type="email" label={"Email Address"} />
          <FloatingInput type="password" label={"Password"} />
          <FloatingInput type="password" label={"Confirm Password"} />
          <Button className="w-full h-10 font-semibold">Sign Up</Button>
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
