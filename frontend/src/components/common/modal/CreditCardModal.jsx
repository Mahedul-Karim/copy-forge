import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import LoadStripe from "../LoadStripe";
import AddCard from "../payments/AddCard";

const CreditCardModal = ({ open, setOpen }) => {

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <LoadStripe>
        <DialogContent className="border-border bg-background dark:bg-paper max-h-[60vh] overflow-y-auto hideScrollbar">
          <DialogHeader>
            <DialogTitle className="text-2xl text-text-primary text-center">
              Add Credit Card
            </DialogTitle>
            <DialogDescription className="text-text-secondary text-center">
              Enter your card details below.
            </DialogDescription>
          </DialogHeader>
          <AddCard setOpen={setOpen} />
        </DialogContent>
      </LoadStripe>
    </Dialog>
  );
};

export default CreditCardModal;
