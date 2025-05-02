import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// eslint-disable-next-line no-unused-vars
const DetailsCard = ({ Icon, label, description }) => {
  return (
    <Card
      className="bg-white dark:bg-paper border-transparent border-l-[4px] border-l-primary"
      style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 6px" }}
    >
      <CardHeader>
        <CardTitle
          className={"flex items-center gap-3 text-xl text-text-primary"}
        >
          <Icon className="text-primary" /> {label}
        </CardTitle>
        <CardDescription className="py-4 text-base whitespace-pre-wrap font-normal text-text-secondary leading-[1.9]" >{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default DetailsCard;
