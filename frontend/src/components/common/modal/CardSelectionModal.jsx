import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useDispatch, useSelector } from "react-redux";
import CardSelection from "../button/CardSelection";
import { useServer } from "@/hooks/useServer";
import { toast } from "sonner";
import { setAutoBillingCard } from "@/store/slice/user";
import { Loader } from "lucide-react";

const CardSelectionModal = ({ open, setOpen }) => {
  const { creditCard } = useSelector((state) => state.user);

  const [selectedCardId, setSelectedCardId] = useState("");

  const dispatch = useDispatch();

  const { mutate, isPending } = useServer({
    onSuccess: (data) => {
      toast.success(data?.message);
      dispatch(setAutoBillingCard(data?.card));
      setOpen(false);
      setSelectedCardId("");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const handleSelection = () => {
    if (!selectedCardId) {
      return toast.warning("Please select a card");
    }

    const options = {
      method: "PATCH",
      data: {
        selectedCardId,
      },
    };

    mutate({
      endpoint: "user/billing",
      options,
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="border-border bg-background dark:bg-paper max-h-[60vh] overflow-y-auto hideScrollbar">
        <DialogHeader>
          <DialogTitle className="text-2xl text-text-primary text-center">
            Select a Card
          </DialogTitle>
          <DialogDescription className="text-text-secondary text-center">
            Select a credit card from the card you have added for auto renewal/
          </DialogDescription>
        </DialogHeader>
        <section className="my-4 flex flex-col gap-2">
          {creditCard?.length > 0 &&
            creditCard?.map((card) => (
              <CardSelection
                key={card._id}
                cardType={card?.cardType}
                id={card?._id}
                exp_month={card?.exp_month}
                exp_year={card?.exp_year}
                cardNumber={card?.lastFourNumber}
                setSelectedCardId={setSelectedCardId}
                selectedCardId={selectedCardId}
              />
            ))}
        </section>
        <DialogFooter>
          <Button variant={"outline"} onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            onClick={handleSelection}
            className={"font-semibold"}
            disabled={isPending}
          >
            {isPending && <Loader className="animate-spin" />} Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CardSelectionModal;
