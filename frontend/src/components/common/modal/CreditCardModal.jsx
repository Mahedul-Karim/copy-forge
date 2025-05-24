import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { formatDate } from "date-fns";
import { CalendarIcon } from "lucide-react";

const CreditCardModal = ({ open, setOpen }) => {
  const [cardType, setCardType] = useState("visa");
  const [expiryDate, setExpiryDate] = useState();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="border-border bg-background dark:bg-paper max-h-[60vh] overflow-y-auto hideScrollbar">
        <DialogHeader>
          <DialogTitle className="text-2xl text-text-primary text-center">
            Add Credit Card
          </DialogTitle>
          <DialogDescription className="text-text-secondary text-center">
            Enter your card details below.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-4 space-y-4 w-full"
        >
          <RadioGroup
            value={cardType}
            onValueChange={setCardType}
            className={"grid xs:grid-cols-2 gap-4"}
          >
            <div className="relative">
              <RadioGroupItem
                value="visa"
                id="visa-card"
                className={"absolute hidden"}
              />
              <Label
                htmlFor="visa-card"
                className={`p-4 border rounded-lg flex-col cursor-pointer  gap-2  ${
                  cardType === "visa"
                    ? "bg-blue-500 border-transparent"
                    : "bg-background border-border"
                }`}
              >
                <div className="bg-blue-500 size-10 rounded-lg flex items-center justify-center shrink-0">
                  <img src="/visa.png" alt="" className="size-6" />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <h3
                    className={`text-[18px] font-medium ${
                      cardType === "visa" ? "text-white" : "text-text-primary"
                    }`}
                  >
                    Visa
                  </h3>
                  <div
                    className={`font-mono text-sm opacity-90 ${
                      cardType === "visa" ? "text-white" : "text-text-secondary"
                    }`}
                  >
                    •••• •••• •••• ••••
                  </div>
                </div>
              </Label>
            </div>
            <div className="relative">
              <RadioGroupItem
                value="master"
                id="master-card"
                className={"absolute hidden"}
              />
              <Label
                htmlFor="master-card"
                className={`p-4 border rounded-lg flex-col cursor-pointer gap-2  ${
                  cardType === "master"
                    ? "bg-red-500 border-transparent"
                    : "bg-background border-border"
                }`}
              >
                <div className="bg-red-500 size-10 rounded-lg flex items-center justify-center shrink-0">
                  <img src="/master.png" alt="" className="size-6" />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <h3
                    className={`text-[18px] font-medium ${
                      cardType === "master" ? "text-white" : "text-text-primary"
                    }`}
                  >
                    Master
                  </h3>
                  <div
                    className={`font-mono text-sm opacity-90 ${
                      cardType === "master"
                        ? "text-white"
                        : "text-text-secondary"
                    }`}
                  >
                    •••• •••• •••• ••••
                  </div>
                </div>
              </Label>
            </div>
          </RadioGroup>
          <div className="space-y-2">
            <Label className="text-text-secondary">Card Number</Label>
            <Input
              type="text"
              className="h-11 bg-background  text-text-primary placeholder:text-text-secondary/80 shadow-none"
              placeholder="12345678"
            />
          </div>
          <div className="space-y-2 w-full">
            <Label className="text-text-secondary">Card Expiry Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={"h-11 justify-between w-full text-text-primary"}
                >
                  {expiryDate ? formatDate(expiryDate, "PPP") : "-- -- ----"}
                  <CalendarIcon className="mr-2 h-4 w-4 text-text-secondary" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="xs:w-[var(--radix-popper-anchor-width)]  p-0 shadow-none border-border">
                <Calendar
                  mode="single"
                  animate
                  selected={expiryDate}
                  onSelect={setExpiryDate}
                  initialFocus
                  disabled={{ before: new Date() }}
                  fromMonth={new Date()}
                  className="bg-background dark:bg-paper overflow-clip rounded-lg w-full"
                  
                />
              </PopoverContent>
            </Popover>
          </div>
          <Button className="w-full font-semibold">Add Card</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreditCardModal;
