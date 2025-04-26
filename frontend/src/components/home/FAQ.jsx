import React, { useState } from "react";
import Container from "../common/Container";
import Title from "../common/section/Title";
import { faqData } from "@/lib/utils/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  

  return (
    <Container className="py-[45px] md:py-16">
      <Title
        text={"You might have some questions,\n lets talk about it"}
        highlight={"questions,"}
      />

      <Accordion
        type="single"
        collapsible
        className="w-full max-w-[630px] mx-auto mt-10 flex flex-col gap-4"
      >
        {faqData.map((data, i) => (
          <AccordionItem
            value={`item-${i + 1}`}
            className="rounded-2xl px-4 bg-background dark:bg-paper  border-none"
            key={i}
            style={{ boxShadow: "0 0px 6px rgba(0, 0, 0, 0.15)" }}
          >
            <AccordionTrigger
              className={"cursor-pointer text-sm xs:text-base font-bold text-text-primary"}
            >
              {data.title}
            </AccordionTrigger>
            <AccordionContent className="text-text-secondary font-normal text-sm xs:text-base leading-[1.7] ">
              {data.description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
};

export default FAQ;
