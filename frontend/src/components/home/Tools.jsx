import React from "react";
import Container from "../common/Container";
import ToolsCard from "./tools/ToolsCard";

import Title from "../common/section/Title";
import { TOOLS_CARD_DATA } from "@/lib/utils/data";

const Tools = () => {
  return (
    <div className="bg-paper dark:bg-background">
      <Container className="py-[45px] md:py-16">
        <Title
          highlight={"awesome tools"}
          text={"Things you can do with \n our awesome tools"}
        />

        <div className="mt-10 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px] lg:gap-5">
          {TOOLS_CARD_DATA.map((card, i) => (
            <ToolsCard
              key={i}
              Icon={card.Icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Tools;
