import Container from "@/components/common/Container";
import React from "react";
import { Outlet } from "react-router";

const Auth = () => {
  return (
    <Container className="py-8 md:py-16 grid md:grid-cols-2 items-center gap-4">
      <div className="hidden md:block" >
        <img src="/auth.png" alt="" />
      </div>
      <div className="md:max-w-[450px] " >
        <Outlet />
      </div>
    </Container>
  );
};

export default Auth;
