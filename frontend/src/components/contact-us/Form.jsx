import React from "react";
import FloatingInput from "../form/FloatingInput";
import FloatingTextarea from "../form/FloatingTextarea";
import { Button } from "../ui/button";
import { Send } from "lucide-react";

const Form = () => {
  return (
    <div
      className="bg-white dark:bg-paper border-transparent border-t-[4px] border-t-primary rounded-xl p-6"
      style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 6px" }}
    >
      <h2 className="text-xl sm:text-2xl mb-10 font-bold text-center text-text-primary relative after:absolute after:w-10 after:h-[3px] after:rounded-full after:bg-gradient-to-r after:from-[#FFD65A] after:from-30% after:to-[#FFB84C] after:-bottom-[12px] after:left-[50%] after:-translate-x-[50%]">
        Send Us a Message
      </h2>

      <form className="space-y-8" onSubmit={e=>e.preventDefault()}>
        <FloatingInput label="Your Name" />
        <FloatingInput label="Your Email" />
        <FloatingTextarea label="Your Message" />
        <Button className="h-12 font-semibold" >Send Message <Send /> </Button>
      </form>
    </div>
  );
};

export default Form;
