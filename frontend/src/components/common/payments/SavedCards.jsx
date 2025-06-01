import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Empty from "../Empty";
import CardSelection from "../button/CardSelection";
import { Button } from "@/components/ui/button";
import { useServer } from "@/hooks/useServer";
import { toast } from "sonner";
import { api } from "@/lib/api";
import { Loader } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import { updateStats } from "@/store/slice/user";

const SavedCards = ({ setOpen }) => {
  const { creditCard } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const queryClient = useQueryClient();

  const [selectedCardId, setSelectedCardId] = useState("");

  const { mutate, isPending } = useServer({
    handleMutate: async () => {
      const data = await api({
        endpoint: "payment",
        options: {
          method: "POST",
          data: {
            cardId: selectedCardId,
          },
        },
      });

      if (!data.success) {
        throw new Error(
          data?.message || "Something went wrong while purchasing package"
        );
      }

      const res = await api({
        endpoint: "payment/success",
        options: {
          method: "POST",
        },
      });

      return res;
    },
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["userStats"] });
      dispatch(updateStats());
      queryClient.refetchQueries({ queryKey: ["userPackages"] });
    },
    onError: (err) => {
      toast.error(err?.message);
    },
  });

  const handlePurchase = () => {
    if (!selectedCardId) {
      return toast.error("Select a card first");
    }

    mutate();
  };

  return (
    <>
      {creditCard?.length === 0 ? (
        <Empty title="You have not added any credit card" />
      ) : (
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
          <Button
            className="font-semibold"
            onClick={handlePurchase}
            disabled={isPending}
          >
            {isPending && <Loader className="animate-spin" />} Purchase
          </Button>
        </section>
      )}
    </>
  );
};

export default SavedCards;
