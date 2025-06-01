import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useDispatch, useSelector } from "react-redux";
import { setAutoBilling } from "@/store/slice/user";
import { useServer } from "@/hooks/useServer";
import { toast } from "sonner";

const BillingSetting = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const { mutate } = useServer({
    onSuccess: (data) => {
      dispatch(setAutoBilling(data?.isAutoBilling));
    },
    onError: (err) => {
      toast.error(err.message);
      dispatch(setAutoBilling(!user?.autoBilling));
    },
  });

  const handleCheckChange = (val) => {
    dispatch(setAutoBilling(val));

    const options = {
      method: "POST",
      data: {
        setBilling: val,
      },
    };

    mutate({
      endpoint: "user/billing",
      options,
    });
  };

  return (
    <Card className="my-6 border-border shadow-none bg-background">
      <CardHeader className="border-b border-border [.border-b]:pb-4 px-4 xs:px-6">
        <CardTitle className="text-xl text-text-primary">
          Billing Setting
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 xs:px-6">
        <div className="border border-border rounded-xl p-4 flex items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="font-semibold text-text-primary">
              Enable Auto Billing
            </h2>
            <p className="text-text-secondary text-sm">
              Automatically charge your preferred payment method when your
              subscription renews.
            </p>
          </div>
          <div>
            <Switch
              checked={user?.autoBilling}
              onCheckedChange={handleCheckChange}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BillingSetting;
