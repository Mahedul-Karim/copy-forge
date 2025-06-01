import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import LoadStripe from "../LoadStripe";
import Purchase from "./purchase/Purchase";

const PurchaseModal = ({ open, setOpen }) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <LoadStripe>
        <DialogContent className="border-border bg-background dark:bg-paper xs:max-h-[60vh] max-h-[70vh] overflow-y-auto hideScrollbar">
          <DialogHeader>
            <DialogTitle className="text-2xl text-text-primary text-center">
              Purchase Package
            </DialogTitle>
            <DialogDescription className="text-text-secondary text-center">
              Type a card number or select from saved one
            </DialogDescription>
          </DialogHeader>
          <Purchase setOpen={setOpen} />
        </DialogContent>
      </LoadStripe>
    </Dialog>
  );
};

export default PurchaseModal;
