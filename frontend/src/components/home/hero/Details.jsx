import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

const words = ["Video Script", "Article", "Rewrite Article", "Ads Content"];

const Details = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [speed, setSpeed] = useState(300);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const fullText = currentWord;

    const handleTyping = () => {
      setText((prevText) => {
        const updatedText = isDeleting
          ? fullText.slice(0, prevText.length - 1)
          : fullText.slice(0, prevText.length + 1);

        if (!isDeleting && updatedText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && updatedText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }

        return updatedText;
      });

      setSpeed(isDeleting ? 50 : 150);
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, speed]);

  return (
    <>
      <h1 className="text-[27px] xs:text-[35px] lg:text-[45px] font-bold leading-[1.3] text-center">
        Fastest Way To Write <br />
        <span className="text-gradient font-bold block min-h-[59px]">
          {text}
        </span>
      </h1>
      <p className="text-center text-text-secondary text-xs xs:text-sm lg:text-base">
        CopyForge is your copywriter assistant that uses AI and a deep
        understanding of your content to help you write text faster.
      </p>
      <div className="mt-[10px]">
        <Button
          className={
            "rounded-full text-xs xs:text-sm leading-[1.5] xs:leading-[1.75] font-semibold"
          }
        >
          Purchase Now
        </Button>
      </div>
    </>
  );
};

export default Details;
