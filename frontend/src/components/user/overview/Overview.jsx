import React from "react";
import { Button } from "../../ui/button";
import { Clock, FileText, LogOut, Pencil, Save, Scroll } from "lucide-react";
import StateCard from "./StateCard";
import RecentDocuments from "./RecentDocuments";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase.config";
import { clearUser } from "@/store/slice/user";
import { useDatas } from "@/hooks/useData";
import Loader from "@/components/common/loader/Loader";
import Empty from "@/components/common/Empty";


const Overview = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSignout = async () => {
    await signOut(auth);
    navigate("/");
    dispatch(clearUser());
  };

  const queries = [
    {
      queryKey: ["userStats"],
      endpoint: "stats",
    },
    {
      queryKey: ["userDocuments"],
      endpoint: "contents",
    },
  ];

  const [statsData, documentData] = useDatas({ queries });

  const { data, isPending } = statsData;
  const { data: allContents, isPending: isContentPending } = documentData;

  const usage = data?.stats?.usage;
  const limits = data?.stats?.limits;

  return (
    <section className="flex flex-col gap-3">
      <div className="flex flex-col xs:flex-row xs:justify-end items-center gap-4 order-3 xs:order-1">
        <Button
          className="font-semibold w-full xs:w-auto"
          onClick={() => navigate("/document/create")}
        >
          <Pencil /> Create New
        </Button>
        <Button
          className="font-semibold bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white/10 dark:hover:bg-white/20 w-full xs:w-auto"
          onClick={handleSignout}
        >
          <LogOut /> Log Out
        </Button>
      </div>

      {isPending || isContentPending ? (
        <div className="h-[250px] xs:h-[500px] flex items-center justify-center order-1 xs:order-2">
          <Loader />
        </div>
      ) : (
        <>
          <div className="order-1 xs:order-2 bg-paper p-4 dark:bg-background rounded-xl">
            <section className="grid md:grid-cols-2 gap-4">
              <StateCard
                Icon={Clock}
                subtitle={"Today"}
                title={"Daily Limit Available"}
                count={limits?.dailyLimit - usage?.dailyLimitUsed}
              />
              <StateCard
                Icon={Scroll}
                subtitle={"This Month"}
                title={"Documents Created"}
                count={usage?.totalContentUsed}
              />
              <StateCard
                Icon={Save}
                subtitle={"This Month"}
                title={"Saves Available"}
                count={limits?.saveLimit - usage?.saveLimitUsed}
              />
              <StateCard
                Icon={FileText}
                subtitle={"This Month"}
                title={"Total Documents Available"}
                count={limits?.totalContentLimit - usage?.totalContentUsed}
              />
            </section>
          </div>

          {allContents?.contents?.length === 0 ? (
            <Empty
              title={"No documents found!"}
              className="order-2 xs:order-3"
            />
          ) : (
            <RecentDocuments contents={allContents?.contents} />
          )}
        </>
      )}
    </section>
  );
};

export default Overview;
