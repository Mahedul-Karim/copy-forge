import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import React, { useState } from "react";
import PurchaseForm from "../../payments/PurchaseForm";
import SavedCards from "../../payments/SavedCards";

const Purchase = ({ setOpen }) => {
  const [showSavedCard, setShowSavedCard] = useState(false);

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-1">
        <Label
          htmlFor="saved-card"
          className="text-text-primary text-sm font-medium cursor-pointer"
        >
          Use saved cards
        </Label>
        <Switch
          id="saved-card"
          className="w-10 h-5 [&>span]:size-4"
          checked={showSavedCard}
          onCheckedChange={setShowSavedCard}
        />
      </div>
      {!showSavedCard ? (
        <PurchaseForm setOpen={setOpen} />
      ) : (
        <SavedCards setOpen={setOpen} />
      )}
    </section>
  );
};

export default Purchase;
