import React from "react";
import Header from "../layout/Header";
import Container from "../common/Container";
import Footer from "../layout/Footer";
import { Link, useRouteError } from "react-router";
import { buttonVariants } from "../ui/button";

const NotFound = () => {
  const error = useRouteError();


  return (
    <>
      <Header />
      <Container className="py-10">
        <div className="flex items-center justify-center">
          <img src="/not-found.png" alt="" className="max-h-[350px]" />
        </div>
        <p className="my-4 text-center text-text-secondary whitespace-pre-wrap">
          {error?.message ||
            "Oops! The page you're looking for seems to have taken a different path.\n It might be under construction or doesn't exist."}
        </p>
        <div className="flex items-center justify-center">
          <Link
            to="/"
            className={`${buttonVariants({
              variant: "default",
            })} !rounded-full`}
          >
            Back to Home
          </Link>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default NotFound;
