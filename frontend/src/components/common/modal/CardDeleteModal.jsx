import React from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { useServer } from "@/hooks/useServer";
import { toast } from "sonner";
import { filterCard } from "@/store/slice/user";
import { Loader } from "lucide-react";

const CardDeleteModal = ({
  open,
  setOpen,
  cardId,
  setCardId,
  paymentMethodId,
  setPaymentMethodId,
}) => {
  const dispatch = useDispatch();

  const { mutate, isPending } = useServer({
    onSuccess: (data) => {
      toast.success(data.message);
      dispatch(filterCard(cardId));
      setCardId("");
      setPaymentMethodId("");
      setOpen(false);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const handleDelete = () => {
    if (!cardId || !paymentMethodId) {
      return toast.error("No card id has been found!");
    }
    const options = {
      method: "DELETE",
      data:{
        cardId,
        paymentMethodId
      }
    };
    mutate({ endpoint: "payment", options });
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="bg-background dark:bg-paper border-border">
        <AlertDialogHeader>
          <AlertDialogTitle className={"text-text-primary"}>
            Are you absolutely sure?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-text-secondary">
            This action cannot be undone. This will permanently delete your card
            info and remove your card data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button
            className={"font-semibold"}
            onClick={handleDelete}
            disabled={isPending}
          >
            {isPending && <Loader className="animate-spin" />} Continue
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CardDeleteModal;
