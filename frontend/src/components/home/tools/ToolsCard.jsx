import React from "react";

import { Card, CardContent } from "@/components/ui/card";

const ToolsCard = ({ Icon, title, description }) => {
  return (
    <Card
      className={
        "border-border dark:bg-paper bg-white overflow-clip hover:-translate-y-[10px] transition-all duration-300 rounded-[12px] shadow-none"
      }
    >
      <CardContent className={"flex flex-col gap-[10px]"}>
        <div>
          <div className="bg-[#FEF3C7] inline-flex gap-2 items-center justify-center rounded-md p-2">
            <Icon color="#CA8A04" />
          </div>
        </div>
        <h2 className="font-bold text-base xs:text-lg">{title}</h2>
        <p className="line-clamp-3 text-xs xs:text-sm text-text-secondary">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default ToolsCard;
