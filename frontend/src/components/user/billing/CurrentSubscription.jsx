import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CurrentSubscription = ({ stats }) => {
  const nextBillingDate = (date) => {
    const renewedAtDate = new Date(date);

    const nextDate = new Date(
      renewedAtDate.setMonth(renewedAtDate.getMonth() + 1)
    );

    const formatted = new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(nextDate);

    return formatted;
  };

  return (
    <Card className="my-6 border-border shadow-none bg-background">
      <CardHeader className="border-b border-border [.border-b]:pb-4 px-4 xs:px-6">
        <CardTitle className="text-xl text-text-primary">
          Current Subscription
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 px-4 xs:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
          ${stats?.price}{" "}
          <span className="text-sm sm:text-base text-text-secondary font-medium">
            {stats?.chargeBasis}
          </span>
        </h2>
        <p className="text-xl sm:text-3xl text-text-primary font-bold">
          {stats?.type} Plan
        </p>
        {(stats?.type !== "free" && stats?.renewedAt) && (
          <p className="text-text-secondary text-sm sm:text-base">
            Next billing is on {nextBillingDate(stats?.renewedAt)}
          </p>
        )}
      </CardContent>
      <CardFooter className="gap-2 xs:gap-4 flex-col xs:flex-row px-4 xs:px-6">
        <Button
          variant="outline"
          className="grow font-semibold border-border text-text-secondary w-full xs:w-auto order-2 xs:order-1"
        >
          Cancel Plan
        </Button>
        {stats?.type === 'free' && <Button className="grow font-semibold w-full xs:w-auto order-1 xs:order-2">
          Upgrade Plan
        </Button>}
      </CardFooter>
    </Card>
  );
};

export default CurrentSubscription;
