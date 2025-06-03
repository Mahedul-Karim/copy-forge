import React, { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import CurrentSubscription from "./CurrentSubscription";
import BillingSetting from "./BillingSetting";
import MyCards from "./MyCards";
import { useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import CardSelectionModal from "@/components/common/modal/CardSelectionModal";
import { useData } from "../../../hooks/useData";
import Loader from "@/components/common/loader/Loader";
import SelectedCard from "./SelectedCard";

const Billings = () => {
  const { user } = useSelector((state) => state.user);

  const [open, setOpen] = useState(false);

  const needsAutoBillingCardSelection =
    user?.creditCard?.length > 1 && user?.autoBilling && !user?.autoBillingCard;

  const { data, isPending } = useData({
    queryKey: ["userPackages", user._id],
    endpoint: "stats/package",
  });

  if (isPending) {
    return (
      <div className="h-[250px] xs:h-[500px] flex items-center justify-center order-1 xs:order-2">
        <Loader />
      </div>
    );
  }

  return (
    <section>
      {needsAutoBillingCardSelection && (
        <>
          <div className="flex justify-end mb-4">
            <Button
              className="font-semibold bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white/10 dark:hover:bg-white/20"
              onClick={() => setOpen(true)}
            >
              + Select Card
            </Button>
          </div>
          <Alert
            className={
              "bg-[#fff2c0] dark:bg-[#fff2c0]/15 border-none text-text-primary flex items-center gap-2"
            }
          >
            <div>
              <AlertCircle className="size-5" />
            </div>
            <div>
              <AlertTitle className="text-base">Attention!</AlertTitle>
              <AlertDescription>
                Looks like you have added multiple cards. You need to choose one
                for automatically monthly payment or system will randomly choose
                one.
              </AlertDescription>
            </div>
          </Alert>
        </>
      )}
      <CurrentSubscription stats={data?.stats?.package} renewedAt={data?.stats?.renewedAt} />
      <BillingSetting />
      <MyCards />
      <SelectedCard />
      <CardSelectionModal open={open} setOpen={setOpen} />
    </section>
  );
};

export default Billings;
