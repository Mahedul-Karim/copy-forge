import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Check } from "lucide-react";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useState } from "react";
import PurchaseModal from "../common/modal/PurchaseModal";

const PricingCard = ({
  isPremium,
  type,
  chargeBasis,
  price,
  features = [],
}) => {
  const { stats, user } = useSelector((state) => state.user);

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleSubscribe = () => {
    if (!user) {
      navigate("/auth/login");
    }
    setOpen(true);
  };

  const isCurrentPlan = stats === type;

  return (
    <>
      <Card className="shadow-md bg-background border border-solid border-transparent border-t-[5px] h-max border-t-primary dark:bg-paper gap-4">
        <CardContent className="flex flex-col">
          {isPremium && (
            <Badge className="rounded-full mb-4 text-[#333] font-semibold">
              Recommended
            </Badge>
          )}
          <h2 className="text-xl font-semibold mb-5">{type}</h2>
          <p className="text-[28px] font-semibold">
            ${price}{" "}
            <span className="text-sm font-normal text-text-secondary">
              /{chargeBasis?.toLowerCase()}
            </span>
          </p>
          <p className="mt-[10px] mb-5 font-normal text-sm text-text-secondary">
            {isPremium
              ? "For professionals and growing teams"
              : "Perfect for individuals getting started"}
          </p>
          <hr className="mb-5 mt-[10px] border-border" />
          <div className="flex flex-col mb-5 gap-4">
            {features.length > 0 &&
              features.map((feat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="flex items-center">
                    <Check
                      size={20}
                      className={
                        !feat.available ? "text-[#ccc]" : "text-[#FFD65A]"
                      }
                    />
                  </span>
                  <p className="text-sm text-text-secondary flex items-center">
                    {feat.value} {feat.name}
                  </p>
                </div>
              ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button
            variant={isPremium ? "default" : "outline"}
            className={`w-full font-semibold ${
              !isPremium &&
              "hover:bg-primary/10 text-[#333] dark:text-primary dark:bg-transparent dark:hover:bg-transparent dark:border-primary border-primary hover:text-[#333]"
            } `}
            disabled={isCurrentPlan || stats === "Premium"}
            onClick={handleSubscribe}
          >
            {isPremium
              ? isCurrentPlan
                ? "Current Plan"
                : "Get Started"
              : isCurrentPlan
              ? "Current Plan"
              : "Sign up for free"}
          </Button>
        </CardFooter>
      </Card>
      <PurchaseModal open={open} setOpen={setOpen} />
    </>
  );
};

export default PricingCard;
