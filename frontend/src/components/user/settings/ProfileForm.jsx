import React from "react";
import FloatingInput from "@/components/form/FloatingInput";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const ProfileForm = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-6 mt-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <FloatingInput label={"Full Name"} />
        <FloatingInput
          label={"Email"}
          hasValue
          value={"test@gmail.com"}
          disabled
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <FloatingInput label={"Phone No"} />
        <FloatingInput label={"Country"} />
      </div>
      <div className="flex items-center gap-4">
        <Switch className="w-10 h-5 [&>span]:size-4" />
        <p className="text-text-primary text-sm font-medium">
          Allow Marketing Email
        </p>
      </div>
      <Button className="font-semibold h-10">Update Profile</Button>
    </form>
  );
};

export default ProfileForm;
