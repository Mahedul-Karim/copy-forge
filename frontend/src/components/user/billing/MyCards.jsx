import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CreditCards from "./CreditCards";
import CreditCardModal from "@/components/common/modal/CreditCardModal";
import { useSelector } from "react-redux";
import Empty from "@/components/common/Empty";
import CardDeleteModal from "@/components/common/modal/CardDeleteModal";

const MyCards = () => {
  const [open, setOpen] = useState(false);

  const [openDelete, setOpenDelete] = useState(false);
  const [cardId, setCardId] = useState("");
  const [paymentMethodId, setPaymentMethodId] = useState("");

  const { creditCard } = useSelector((state) => state.user);

  return (
    <>
      <Card className="my-6 border-border shadow-none bg-background">
        <CardHeader className="border-b border-border [.border-b]:pb-4 px-4 xs:px-6 xs:grid-cols-2 items-center">
          <CardTitle className="text-xl text-text-primary">My Cards</CardTitle>
          <Button
            variant="ghost"
            className="justify-self-start xs:justify-self-end px-0"
            onClick={() => setOpen(true)}
          >
            + Add New Card
          </Button>
        </CardHeader>
        <CardContent className="px-4 xs:px-6 flex flex-col gap-2">
          {creditCard?.length === 0 ? (
            <Empty title={"You have not added any crads yet!"} />
          ) : (
            creditCard?.map((card) => (
              <CreditCards
                key={card._id}
                cardType={card?.cardType}
                id={card?._id}
                paymentMethodId={card?.paymentMethodId}
                exp_month={card?.exp_month}
                exp_year={card?.exp_year}
                cardNumber={card?.lastFourNumber}
                setOpenDelete={setOpenDelete}
                setCardId={setCardId}
                setPaymentMethodId={setPaymentMethodId}
              />
            ))
          )}
        </CardContent>
      </Card>
      <CreditCardModal open={open} setOpen={setOpen} />
      <CardDeleteModal
        open={openDelete}
        setOpen={setOpenDelete}
        cardId={cardId}
        setCardId={setCardId}
        paymentMethodId={paymentMethodId}
        setPaymentMethodId={setPaymentMethodId}
      />
    </>
  );
};

export default MyCards;
