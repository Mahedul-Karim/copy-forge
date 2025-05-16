import React, { useRef } from "react";
import Container from "../common/Container";
import ToolsCard from "./tools/ToolsCard";

import Title from "../common/section/Title";
import { TOOLS_CARD_DATA } from "@/lib/utils/data";
import { useInView, motion } from "framer-motion";

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const cardVariant = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const Tools = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="bg-paper dark:bg-background">
      <Container className="py-[45px] md:py-16">
        <Title
          highlight={"awesome tools"}
          text={"Things you can do with \n our awesome tools"}
        />

        <motion.div
          className="mt-10 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px] lg:gap-5"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          ref={ref}
        >
          {TOOLS_CARD_DATA.map((card, i) => (
            <motion.div key={i} variants={cardVariant}>
              <ToolsCard
                Icon={card.Icon}
                title={card.title}
                description={card.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </div>
  );
};

export default Tools;
