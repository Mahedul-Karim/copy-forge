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
import { Loader } from "lucide-react";
import { removeSelectedCard } from "@/store/slice/user";

const DeleteSelectionModal = ({
  open,
  setOpen,
  cardId,
  setCardId,
  setPaymentMethodId,
}) => {
  const dispatch = useDispatch();

  const { mutate, isPending } = useServer({
    onSuccess: (data) => {
      toast.success(data.message);
      dispatch(removeSelectedCard());
      setCardId("");
      setOpen("");
      setPaymentMethodId("");
      setOpen(false);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const handleDelete = () => {
    const options = {
      method: "DELETE",
    };

    mutate({ endpoint: "user/billing", options });
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="bg-background dark:bg-paper border-border">
        <AlertDialogHeader>
          <AlertDialogTitle className={"text-text-primary"}>
            Are you absolutely sure?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-text-secondary">
            This action cannot be undone. This will remove your selected card for autobilling.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button
            className={"font-semibold"}
            onClick={handleDelete}
            disabled={isPending}
          >
            {isPending && <Loader className="animate-spin" />}
            Continue
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteSelectionModal;
