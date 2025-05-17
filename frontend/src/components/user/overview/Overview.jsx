import React from "react";
import { Button } from "../../ui/button";
import { Clock, FileText, LogOut, Pencil, Save, Scroll } from "lucide-react";
import StateCard from "./StateCard";
import RecentDocuments from "./RecentDocuments";

const stats = [
  {
    count: 3,
    subtitle: "Today",
    title: "Daily Limit Available",
    icon: Clock,
  },
  {
    count: 43,
    subtitle: "This Month",
    title: "Documents Created",
    icon: Scroll,
  },
  {
    count: 10,
    subtitle: "This Month",
    title: "Saves Available",
    icon: Save,
  },
  {
    count: 20,
    subtitle: "This Month",
    title: "Total Documents Available",
    icon: FileText,
  },
];

const Overview = () => {
  return (
    <section className="flex flex-col gap-3">
      <div className="flex flex-col xs:flex-row xs:justify-end items-center gap-4 order-3 xs:order-1">
        <Button className="font-semibold w-full xs:w-auto">
          <Pencil /> Create New
        </Button>
        <Button className="font-semibold bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white/10 dark:hover:bg-white/20 w-full xs:w-auto">
          <LogOut /> Log Out
        </Button>
      </div>
      <div className="order-1 xs:order-2 bg-paper p-4 dark:bg-background rounded-xl">
        <section className="grid md:grid-cols-2 gap-4">
          {stats.length > 0 &&
            stats.map((state, i) => (
              <StateCard
                key={i}
                Icon={state.icon}
                title={state.title}
                subtitle={state.subtitle}
                count={state.count}
              />
            ))}
        </section>
      </div>
      <RecentDocuments />
    </section>
  );
};

export default Overview;
