import { Button } from "@/components/ui/button";
import { maskNumber } from "@/lib/utils";
import React from "react";

const CardSelection = ({
  cardType,
  id,
  exp_month,
  exp_year,
  cardNumber,
  setSelectedCardId,
  selectedCardId,
}) => {
  const handleSection = () => {
    if (selectedCardId === id) {
      setSelectedCardId("");
    } else {
      setSelectedCardId(id);
    }
  };

  return (
    <Button
      variant={"outline"}
      className={`justify-start py-4 h-auto ${
        selectedCardId === id && "border-primary bg-primary/20"
      }`}
      onClick={handleSection}
    >
      <div className="flex gap-2 xs:gap-4">
        <div
          className={`${
            cardType === "mastercard" ? "bg-red-500" : "bg-blue-500"
          } size-8 xs:size-12 rounded-lg shrink-0`}
        >
          <img src={`/${cardType}.png`} alt="" />
        </div>
        <div className="flex flex-col items-start">
          <h2 className="text-text-primary font-semibold text-sm xs:text-base">
            {maskNumber(cardNumber)}
          </h2>
          <p className="text-xs xs:text-sm text-text-secondary">
            Card expires at {exp_month}/{exp_year}
          </p>
        </div>
      </div>
    </Button>
  );
};

export default CardSelection;
