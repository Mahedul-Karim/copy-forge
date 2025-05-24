import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import CurrentSubscription from "./CurrentSubscription";
import BillingSetting from "./BillingSetting";
import MyCards from "./MyCards";

const Billings = () => {
  return (
    <section>
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
            Looks like you have added multiple cards. You need to choose one for
            automatically monthly payment or system will randomly choose one.
          </AlertDescription>
        </div>
      </Alert>
      <CurrentSubscription />
      <BillingSetting />
      <MyCards />
    </section>
  );
};

export default Billings;
