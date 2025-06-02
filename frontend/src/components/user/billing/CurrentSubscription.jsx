import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PurchaseModal from "@/components/common/modal/PurchaseModal";
import { useDispatch } from "react-redux";
import { useServer } from "@/hooks/useServer";
import { toast } from "sonner";
import { degradeStats } from "@/store/slice/user";
import { useQueryClient } from "@tanstack/react-query";
import { Loader } from "lucide-react";

const CurrentSubscription = ({ stats }) => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const queryClient = useQueryClient();

  const { mutate, isPending } = useServer({
    onSuccess: (data) => {
      toast.success(data?.message);
      dispatch(degradeStats());
      queryClient.invalidateQueries({ queryKey: ["userStats"] });
      queryClient.refetchQueries({ queryKey: ["userPackages"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const handleCancel = () => {
    const options = {
      method: "POST",
    };

    mutate({ endpoint: "payment/cancel", options });
  };

  const nextBillingDate = (date) => {
    const renewedAtDate = new Date(date);

    const nextDate = new Date(
      renewedAtDate.setMonth(renewedAtDate.getMonth() + 1)
    );

    const formatted = new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(nextDate);

    return formatted;
  };

  return (
    <>
      <Card className="my-6 border-border shadow-none bg-background">
        <CardHeader className="border-b border-border [.border-b]:pb-4 px-4 xs:px-6">
          <CardTitle className="text-xl text-text-primary">
            Current Subscription
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3 px-4 xs:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            ${stats?.price}{" "}
            <span className="text-sm sm:text-base text-text-secondary font-medium">
              {stats?.chargeBasis}
            </span>
          </h2>
          <p className="text-xl sm:text-3xl text-text-primary font-bold">
            {stats?.type} Plan
          </p>
          {stats?.type !== "free" && stats?.renewedAt && (
            <p className="text-text-secondary text-sm sm:text-base">
              Next billing is on {nextBillingDate(stats?.renewedAt)}
            </p>
          )}
        </CardContent>
        <CardFooter className="gap-2 xs:gap-4 flex-col xs:flex-row px-4 xs:px-6">
          {stats?.type === "Premium" && (
            <Button
              variant="outline"
              className="grow font-semibold border-border text-text-secondary w-full xs:w-auto order-2 xs:order-1"
              disabled={isPending}
              onClick={handleCancel}
            >
              {isPending && <Loader className="animate-spin" />} Cancel Plan
            </Button>
          )}
          {stats?.type === "Free" && (
            <Button
              className="grow font-semibold w-full xs:w-auto order-1 xs:order-2"
              onClick={() => setOpen(true)}
            >
              Upgrade Plan
            </Button>
          )}
        </CardFooter>
      </Card>
      <PurchaseModal open={open} setOpen={setOpen} />
    </>
  );
};

export default CurrentSubscription;
