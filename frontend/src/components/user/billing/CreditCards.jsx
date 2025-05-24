import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { maskNumber } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Pencil, Trash } from "lucide-react";

const CreditCards = () => {
  return (
    <Card className="flex-col sm:flex-row justify-between gap-4 sm:gap-2 border-border shadow-none py-4 bg-background dark:bg-paper">
      <CardContent className="flex flex-col xs:flex-row xs:items-center gap-4" >
        <div className="bg-red-500 size-12 rounded-lg shrink-0">
            <img src="/master.png" alt="" />
        </div>
        <div>
            <h2 className="text-text-primary font-semibold">{maskNumber(123456789)}</h2>
            <p className="text-sm text-text-secondary">Card expires at 10/24</p>
        </div>
      </CardContent>
      <CardFooter className="gap-4 justify-between">
        <Button className="rounded-full bg-muted text-text-primary hover:bg-primary dark:hover:text-[#333] dark:bg-background dark:hover:bg-primary">
            <Pencil />
        </Button>
        <Button className="rounded-full bg-muted text-text-primary hover:bg-destructive hover:text-white dark:bg-background dark:hover:bg-destructive">
            <Trash />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CreditCards;
