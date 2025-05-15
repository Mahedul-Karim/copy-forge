import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const StateCard = ({ Icon, title, subtitle, count }) => {
  return (
    <Card className="border-none shadow-none bg-background dark:bg-paper">
      <CardContent className="flex flex-col xs:flex-row gap-4">
        <div className="bg-[#FEF3C7] inline-flex gap-2 items-center justify-center rounded-md size-10 shrink-0">
          <Icon color="#CA8A04" className="shrink-0" />
        </div>
        <div>
          <div className="flex gap-2 items-baseline">
            <h2 className="text-2xl xs:text-3xl font-bold text-text-primary">{count}</h2>
            <p className="text-xs xs:text-sm font-medium text-text-secondary/80">{subtitle}</p>
          </div>
          <p className="text-text-primary/90 font-semibold text-sm xs:text-base">{title}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default StateCard;
