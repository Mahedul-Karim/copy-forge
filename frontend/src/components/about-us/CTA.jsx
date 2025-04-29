import React from "react";
import Title from "../common/section/Title";
import { Link } from "react-router";
import { buttonVariants } from "../ui/button";

const CTA = () => {
  return (
    <section className="py-8 px-4 md:py-16 my-6">
      <Title text="Ready to transform your content?" highlight="transform" />
      <p className="text-center text-text-secondary text-sm sm:text-base my-4">
        Join thousands of creators, marketers, and businesses who are using
        CopyForge to <br /> create exceptional content at scale.
      </p>
      <div  className="flex items-center justify-center gap-4">
        <Link
          to=""
          className={`${buttonVariants({ variant: "default" })} font-semibold`}
        >
          Get Started
        </Link>
        <Link
          to="/pricing"
          className={`${buttonVariants({ variant: "outline" })} dark:border-text-primary border-border text-text-primary bg-transparent hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent`}
        >
          Pricing
        </Link>
      </div>
    </section>
  );
};

export default CTA;
