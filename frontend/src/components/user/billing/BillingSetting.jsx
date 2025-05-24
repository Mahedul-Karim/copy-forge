import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch"


const BillingSetting = () => {
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
              <h2 className="font-semibold text-text-primary">Enable Auto Billing</h2>
              <p className="text-text-secondary text-sm">Automatically charge your preferred payment method when your subscription renews.</p>
            </div>
            <div>
                <Switch onCheckedChange={console.log}  />
            </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BillingSetting;
