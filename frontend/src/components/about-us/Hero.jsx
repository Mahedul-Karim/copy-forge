import React from "react";
import { Badge } from "../ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="relative py-16 overflow-x-clip z-[1]">
      <div className="absolute inset-0 opacity-10 -z-[1]">
        <div className="top-10 left-10 absolute size-20 sm:size-30 md:size-40 rounded-full bg-primary" />
        <div className="top-20 right-10 md:right-20 absolute size-30 sm:size-40 md:size-56 rounded-full bg-primary" />
        <div className="bottom-10 left-1/4 absolute size-40 sm:size-52 md:size-72 rounded-full bg-primary" />
      </div>
      <div className="text-center">
        <Badge className="xs:[&>svg]:size-4 rounded-full xs:text-sm bg-amber-50 text-amber-600 dark:text-amber-400 dark:bg-amber-500/10">
          <Sparkles />
          Transforming ideas into brilliant content
        </Badge>
      </div>
      <h1 className="text-2xl xs:text-3xl md:text-4xl text-text-primary font-semibold my-6 text-center">
        We are{" "}
        <span>
          Copy<span className="text-primary">Forge</span>
        </span>
      </h1>
      <p className="text-center text-text-secondary text-xs xs:text-sm sm:text-base">
        Empowering creators, marketers, and businesses with advanced AI to
        generate <br /> exceptional content that resonates with audiences.
      </p>
      <div className="my-4 flex justify-center items-center">
        <Button className="font-semibold">
          Get Started Free <ArrowRight />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
