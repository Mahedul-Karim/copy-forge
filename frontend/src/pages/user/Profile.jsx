import Container from "@/components/common/Container";
import ProfileInfo from "@/components/user/ProfileInfo";
import React, { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { SquareChartGantt, CreditCard, Settings } from "lucide-react";
import Overview from "@/components/user/overview/Overview";

const Profile = () => {
  const [tab, setTab] = useState("overview");

  return (
    <main className="py-8 md:py-16 bg-paper dark:bg-background">
      <Container className="bg-background dark:bg-paper rounded-md">
        <ProfileInfo />
        <section className="p-6">
          <Tabs value={tab} onValueChange={setTab} className="w-full">
            <div className="xs:hidden mb-2">
              <Select value={tab} onValueChange={setTab}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a tab" />
                </SelectTrigger>
                <SelectContent className="border-border">
                  <SelectItem value="overview">
                    <SquareChartGantt /> Overview
                  </SelectItem>
                  <SelectItem value="billing">
                    <CreditCard /> Billing
                  </SelectItem>
                  <SelectItem value="settings">
                    <Settings /> Settings
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <TabsList className="border-b-2 border-border bg-transparent w-full rounded-none justify-start px-0 hidden xs:flex mb-2">
              <TabsTrigger value="overview">
                <SquareChartGantt /> Overview
              </TabsTrigger>
              <TabsTrigger value="billing">
                <CreditCard /> Billing
              </TabsTrigger>
              <TabsTrigger value="settings">
                <Settings /> Settings
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <Overview />
            </TabsContent>
            <TabsContent value="billing">
              Change your password here.
            </TabsContent>
            <TabsContent value="settings">
              Change your settings here.
            </TabsContent>
          </Tabs>
        </section>
      </Container>
    </main>
  );
};

export default Profile;
