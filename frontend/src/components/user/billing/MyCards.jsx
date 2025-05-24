import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CreditCards from "./CreditCards";
import CreditCardModal from "@/components/common/modal/CreditCardModal";

const MyCards = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card className="my-6 border-border shadow-none bg-background">
        <CardHeader className="border-b border-border [.border-b]:pb-4 px-4 xs:px-6 xs:grid-cols-2 items-center">
          <CardTitle className="text-xl text-text-primary">My Cards</CardTitle>
          <Button
            variant="ghost"
            className="justify-self-start xs:justify-self-end px-0"
            onClick={()=>setOpen(true)}
          >
            + Add New Card
          </Button>
        </CardHeader>
        <CardContent className="px-4 xs:px-6 flex flex-col gap-2">
          <CreditCards />
        </CardContent>
      </Card>
      <CreditCardModal open={open} setOpen={setOpen} />
    </>
  );
};

export default MyCards;
