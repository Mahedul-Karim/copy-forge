import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Empty from "@/components/common/Empty";
import { useSelector } from "react-redux";
import CreditCards from "./CreditCards";
import DeleteSelectionModal from "@/components/common/modal/DeleteSelectionModal";

const SelectedCard = () => {
  const [openDelete, setOpenDelete] = useState(false);
  const [cardId, setCardId] = useState("");
  const [paymentMethodId, setPaymentMethodId] = useState("");

  const { selectedCard } = useSelector((state) => state.user);

  return (
    <>
      <Card className="my-6 border-border shadow-none bg-background">
        <CardHeader className="border-b border-border [.border-b]:pb-4 px-4 xs:px-6 xs:grid-cols-2 items-center">
          <CardTitle className="text-xl text-text-primary">
            Auto Billing Card
          </CardTitle>
        </CardHeader>
        <CardContent className="px-4 xs:px-6 flex flex-col gap-2">
          {!selectedCard ? (
            <Empty
              title={"You have not selected any crads for autobilling yet!"}
            />
          ) : (
            <CreditCards
              cardType={selectedCard?.cardType}
              id={selectedCard?._id}
              paymentMethodId={selectedCard?.paymentMethodId}
              exp_month={selectedCard?.exp_month}
              exp_year={selectedCard?.exp_year}
              cardNumber={selectedCard?.lastFourNumber}
              setOpenDelete={setOpenDelete}
              setCardId={setCardId}
              setPaymentMethodId={setPaymentMethodId}
            />
          )}
        </CardContent>
      </Card>
      <DeleteSelectionModal
        open={openDelete}
        setOpen={setOpenDelete}
        cardId={cardId}
        setCardId={setCardId}
        setPaymentMethodId={setPaymentMethodId}
      />
    </>
  );
};

export default SelectedCard;
