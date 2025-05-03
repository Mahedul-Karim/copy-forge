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

const Login = () => {
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
        <form
          action=""
          onSubmit={(e) => e.preventDefault()}
          className="space-y-6"
        >
          <FloatingInput type="text" label={"Email Address"} />
          <FloatingInput type="password" label={"Password"} />
          <Button className="w-full h-10 font-semibold" >Sign In</Button>
        </form>
      </CardContent>
      <CardFooter className="flex-col" >
        <div className="flex items-center gap-2 w-full">
          <div className="h-[1.5px] border border-solid border-border grow" />
          <p className="text-text-primary/50" >OR</p>
          <div className="h-[1.5px] border border-solid border-border grow" />
        </div>
        <div className="my-4 w-full">
          <Button variant="outline" className="bg-transparent w-full border-border flex items-center gap-2 dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent text-text-primary/70 hover:text-text-primary/70" >
            <img src="/google.svg" alt="" className="size-5" />
            Google
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Login;
