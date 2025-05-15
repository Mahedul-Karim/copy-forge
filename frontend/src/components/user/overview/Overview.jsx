import React from "react";
import { Button } from "../../ui/button";
import { LogOut, Pencil } from "lucide-react";

const Overview = () => {
  return (
    <section className="flex flex-col gap-3">
      <div className="flex flex-col xs:flex-row xs:justify-end items-center gap-4 order-2 xs:order-1">
        <Button className="font-semibold w-full xs:w-auto">
          <Pencil /> Create New
        </Button>
        <Button className="font-semibold bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white/10 dark:hover:bg-white/20 w-full xs:w-auto">
          <LogOut /> Log Out
        </Button>
      </div>
      <div className="order-1 xs:order-2">Hellow </div>
    </section>
  );
};

export default Overview;
