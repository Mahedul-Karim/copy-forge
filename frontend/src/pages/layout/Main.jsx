import React from "react";
import { Outlet } from "react-router";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import SuspenseFallback from "@/routes/SuspenseFallback";

const Main = () => {
  return (
    <>
      <Header />
      <SuspenseFallback>
        <Outlet />
      </SuspenseFallback>
      <Footer />
    </>
  );
};

export default Main;
