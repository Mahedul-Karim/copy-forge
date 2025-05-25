import FloatingInput from "@/components/form/FloatingInput";
import { Button } from "@/components/ui/button";
import React from "react";

const UpdatePassword = () => {
  return (
    <div>
      <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mt-4">
        Reset Password
      </h2>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-6 mt-6">
        <FloatingInput label="Current Password" />
        <div className="grid sm:grid-cols-2 gap-4">
          <FloatingInput label="New Password" />
          <FloatingInput label="Confirm Password" />
        </div>
        <Button>Reset Password</Button>
      </form>
    </div>
  );
};

export default UpdatePassword;
