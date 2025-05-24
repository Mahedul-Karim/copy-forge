import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CurrentSubscription = () => {
  return (
    <Card className="my-6 border-border shadow-none bg-background">
      <CardHeader className="border-b border-border [.border-b]:pb-4 px-4 xs:px-6">
        <CardTitle className="text-xl text-text-primary">
          Current Subscription
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 px-4 xs:px-6" >
        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">$0 <span className="text-sm sm:text-base text-text-secondary font-medium">Month</span></h2>
        <p className="text-xl sm:text-3xl text-text-primary font-bold">Free Plan</p>
        <p className="text-text-secondary text-sm sm:text-base">Next billing is on May 17, 2025</p>
      </CardContent>
      <CardFooter className="gap-2 xs:gap-4 flex-col xs:flex-row px-4 xs:px-6">
        <Button variant="outline" className="grow font-semibold border-border text-text-secondary w-full xs:w-auto order-2 xs:order-1">Cancel Plan</Button>
        <Button className="grow font-semibold w-full xs:w-auto order-1 xs:order-2">Upgrade Plan</Button>
      </CardFooter>
    </Card>
  );
};

export default CurrentSubscription;
