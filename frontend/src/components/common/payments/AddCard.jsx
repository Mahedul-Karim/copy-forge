import React from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Label } from "@/components/ui/label";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { useServer } from "@/hooks/useServer";
import { toast } from "sonner";
import { updateCard } from "@/store/slice/user";
import { api } from "@/lib/api";
import { Loader } from "lucide-react";

const AddCard = ({ setOpen }) => {
  const { isDarkMode } = useSelector((state) => state.dark);

  const dispatch = useDispatch();

  const stripe = useStripe();
  const element = useElements();

  const { mutate, isPending } = useServer({
    handleMutate: async () => {
      const data = await api({
        endpoint: "payment/setup-intent",
        options: {
          method: "POST",
        },
      });

      const result = await stripe.confirmCardSetup(data?.client_secret, {
        payment_method: {
          card: element.getElement(CardNumberElement),
        },
      });

      if (result.error) {
        throw new Error(result.error.message);
      }

      const res = await api({
        endpoint: "payment/save",
        options: {
          method: "POST",
          data: {
            paymentMethodId: result.setupIntent.payment_method,
          },
        },
      });

      return res;
    },

    onSuccess: (data) => {
      toast.success(data?.message);
      dispatch(updateCard(data?.card));
      setOpen(false);
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate();
  };

  return (
    <div>
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
          {isPending && <Loader className="animate-spin" />} Add Card
        </Button>
      </form>
    </div>
  );
};

export default AddCard;
