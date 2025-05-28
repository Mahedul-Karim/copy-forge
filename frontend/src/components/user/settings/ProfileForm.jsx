import React, { useState } from "react";
import FloatingInput from "@/components/form/FloatingInput";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useDispatch, useSelector } from "react-redux";
import { Label } from "@/components/ui/label";
import { useServer } from "@/hooks/useServer";
import { Loader } from "lucide-react";
import { useToast } from "@/hooks/useToast";
import { updateUser } from "@/store/slice/user";

const ProfileForm = () => {
  const { user } = useSelector((state) => state.user);

  const [fullName, setFullName] = useState(user?.fullName || "");
  const [phoneNo, setPhoneNo] = useState(user?.phoneNo || "");
  const [country, setCountry] = useState(user?.country || "");
  const [allowMarketingEmail, setAllowMarketingEmail] = useState(false);

  const dispatch = useDispatch();

  const { success, error, warning } = useToast();

  const { mutate, isPending } = useServer({
    onSuccess: (data) => {
      success(data?.message);
      dispatch(updateUser({ user: data?.user }));
    },
    onError: (err) => {
      error(err.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNotChanged =
      fullName === user?.fullName &&
      phoneNo?.toString() === user?.phoneNo?.toString() &&
      country === user?.country;

    if (isNotChanged) {
      return warning("No fields were changed");
    }

    const data = {
      fullName,
      phoneNo,
      country,
    };

    const changedData = {};

    for (const key in data) {
      if (data[key] !== user[key]) {
        changedData[key] = data[key];
      }
    }

    const options = {
      method: "PATCH",
      data: changedData,
    };

    mutate({ endpoint: "user", options });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 mt-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <FloatingInput
          label={"Full Name"}
          disabled={isPending}
          value={fullName}
          hasValue={!!fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <FloatingInput label={"Email"} hasValue value={user?.email} disabled />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <FloatingInput
          label={"Phone No"}
          disabled={isPending}
          value={phoneNo}
          hasValue={!!phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
        />
        <FloatingInput
          label={"Country"}
          disabled={isPending}
          value={country}
          hasValue={!!country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-4">
        <Switch
          id="marketing"
          className="w-10 h-5 [&>span]:size-4"
          checked={allowMarketingEmail}
          onCheckedChange={setAllowMarketingEmail}
        />
        <Label
          htmlFor="marketing"
          className="text-text-primary text-sm font-medium cursor-pointer"
        >
          Allow Marketing Email
        </Label>
      </div>
      <Button className="font-semibold h-10" disabled={isPending}>
        {isPending && <Loader className="animate-spin" />}
        Update Profile
      </Button>
    </form>
  );
};

export default ProfileForm;
