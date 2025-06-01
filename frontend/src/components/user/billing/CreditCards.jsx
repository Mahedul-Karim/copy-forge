import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { maskNumber } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

const CreditCards = ({
  cardType,
  cardNumber,
  id,
  exp_month,
  exp_year,
  paymentMethodId,
  setOpenDelete,
  setCardId,
  setPaymentMethodId,
}) => {
  const handleDelete = () => {
    setOpenDelete(true);
    setCardId(id);
    setPaymentMethodId(paymentMethodId);
  };

  return (
    <Card className="flex-col sm:flex-row justify-between gap-4 sm:gap-2 border-border shadow-none py-4 bg-background dark:bg-paper">
      <CardContent className="flex flex-col xs:flex-row xs:items-center gap-4">
        <div
          className={`${
            cardType === "mastercard" ? "bg-red-500" : "bg-blue-500"
          }  size-12 rounded-lg shrink-0`}
        >
          <img src={`/${cardType}.png`} alt="" />
        </div>
        <div>
          <h2 className="text-text-primary font-semibold">
            {maskNumber(cardNumber)}
          </h2>
          <p className="text-sm text-text-secondary">
            Card expires at {exp_month}/{exp_year}
          </p>
        </div>
      </CardContent>
      <CardFooter className="gap-4 justify-between">
        <Button
          className="rounded-full bg-muted text-text-primary hover:bg-destructive hover:text-white dark:bg-background dark:hover:bg-destructive"
          onClick={handleDelete}
        >
          <Trash />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CreditCards;
