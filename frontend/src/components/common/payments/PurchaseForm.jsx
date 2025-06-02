import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useServer } from "@/hooks/useServer";
import { api } from "@/lib/api";
import { updateStats } from "@/store/slice/user";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useQueryClient } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

const PurchaseForm = ({ setOpen }) => {
  const elements = useElements();
  const stripe = useStripe();

  const dispatch = useDispatch();

  const { isDarkMode } = useSelector((state) => state.dark);

  const queryClient = useQueryClient();

  const { mutate, isPending } = useServer({
    handleMutate: async () => {
      const data = await api({
        endpoint: "payment",
        options: {
          method: "POST",
        },
      });

      const client_secret = data?.client_secret;

      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
        },
      });

      if (result.error) {
        throw new Error(result.error.message);
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
      queryClient.refetchQueries({queryKey:["userPackages"]});
      setOpen(false);
    },
    onError: (err) => {
      toast.error(err?.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label className="text-text-secondary">Card Number</Label>
        <div className="h-10 flex items-center w-full dark:bg-input/30 border-input border rounded-md px-3">
          <CardNumberElement
            className="w-full"
            options={{
              style: {
                base: {
                  color: isDarkMode ? "#ffffff" : "#333333",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: "16px",
                  fontSmoothing: "antialiased",
                  "::placeholder": {
                    color: isDarkMode ? "#9CA3AF" : "#6B7280",
                    fontSize: "14px",
                  },
                  iconColor: isDarkMode ? "#9CA3AF" : "#6B7280",
                },
                invalid: {
                  color: "#ef4444",
                },
              },
            }}
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label className="text-text-secondary">Expiry Date</Label>
        <div className="h-10 flex items-center w-full dark:bg-input/30 border-input border rounded-md px-3">
          <CardExpiryElement
            className="w-full"
            options={{
              style: {
                base: {
                  color: isDarkMode ? "#ffffff" : "#333333",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: "16px",
                  fontSmoothing: "antialiased",
                  "::placeholder": {
                    color: isDarkMode ? "#9CA3AF" : "#6B7280",
                    fontSize: "14px",
                  },
                  iconColor: isDarkMode ? "#9CA3AF" : "#6B7280",
                },
                invalid: {
                  color: "#ef4444",
                },
              },
            }}
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label className="text-text-secondary">CVC</Label>
        <div className="h-10 flex items-center w-full dark:bg-input/30 border-input border rounded-md px-3">
          <CardCvcElement
            className="w-full"
            options={{
              style: {
                base: {
                  color: isDarkMode ? "#ffffff" : "#333333",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: "16px",
                  fontSmoothing: "antialiased",
                  "::placeholder": {
                    color: isDarkMode ? "#9CA3AF" : "#6B7280",
                    fontSize: "14px",
                  },
                  iconColor: isDarkMode ? "#9CA3AF" : "#6B7280",
                },
                invalid: {
                  color: "#ef4444",
                },
              },
            }}
          />
        </div>
      </div>
      <Button className="h-10 font-semibold w-full" disabled={isPending}>
        {" "}
        {isPending && <Loader className="animate-spin" />}
        Purchase
      </Button>
    </form>
  );
};

export default PurchaseForm;
