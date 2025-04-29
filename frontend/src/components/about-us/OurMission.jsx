import React from "react";
import Title from "../common/section/Title";

import { Sparkles, Zap, Users } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const MISSION_DATA = [
  {
    icon: <Zap color="#CA8A04" />,
    title: "Speed & Efficiency",
    paragraph:
      "Generate high-quality content in seconds, not hours, freeing you to focus on what matters most.",
  },
  {
    icon: <Sparkles color="#CA8A04" />,
    title: "Creativity Unleashed",
    paragraph:
      "Break through creative blocks with AI that suggests fresh angles and unexpected approaches.",
  },
  {
    icon: <Users color="#CA8A04" />,
    title: "Inclusive Design",
    paragraph:
      "Built for everyone from professional copywriters to entrepreneurs just finding their voice",
  },
];

const OurMission = () => {
  return (
    <section className="py-8 px-4 md:py-16 bg-primary/10 my-6 rounded-2xl">
      <Title text={"Empowering Creative Expression"} highlight={"Creative"} />
      <p className="text-center text-text-secondary text-sm sm:text-base my-4">
        We're on a mission to democratize exceptional content creation, making
        it accessible to <br /> everyone regardless of writing background.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8" >
        {MISSION_DATA.map((data, i) => (
          <Card
            className={
              "border-border/50 dark:border-border dark:bg-paper bg-white overflow-clip hover:-translate-y-[10px] transition-all duration-300 rounded-[12px] shadow-none"
            }
            key={i}
          >
            <CardContent className={"flex flex-col gap-[10px]"}>
              <div>
                <div className="bg-[#FEF3C7] inline-flex gap-2 items-center justify-center rounded-md p-2">
                  {data.icon}
                </div>
              </div>
              <h2 className="font-bold text-base xs:text-lg">{data.title}</h2>
              <p className="text-xs xs:text-sm text-text-secondary">
                {data.paragraph}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default OurMission;
