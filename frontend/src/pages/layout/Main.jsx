import React from "react";
import { Outlet } from "react-router";
import Header from "../../components/layout/Header";

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Main;
