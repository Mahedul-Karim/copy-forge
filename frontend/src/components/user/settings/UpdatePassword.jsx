import FloatingInput from "@/components/form/FloatingInput";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import {
  reauthenticateWithCredential,
  EmailAuthProvider,
  updatePassword,
} from "firebase/auth";
import { useToast } from "@/hooks/useToast";
import { useMutation } from "@tanstack/react-query";
import { auth } from "@/config/firebase.config";
import { Loader } from "lucide-react";

const UpdatePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { success, error } = useToast();

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const user = auth.currentUser;

      const credential = EmailAuthProvider.credential(
        user.email,
        currentPassword
      );

      await reauthenticateWithCredential(user, credential);

      await updatePassword(user, newPassword);
    },
    onSuccess: () => {
      success("Password updated successfully!");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    },
    onError: (err) => {
      if (err.code === "auth/invalid-credential") {
        return error("Current password is incorrect");
      }
      error(err.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      return error("New password and confirm password must be same");
    }

    mutate();
  };

  return (
    <div>
      <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mt-4">
        Reset Password
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6 mt-6">
        <FloatingInput
          label="Current Password"
          type="password"
          value={currentPassword}
          hasValue={!!currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          disabled={isPending}
        />
        <div className="grid sm:grid-cols-2 gap-4">
          <FloatingInput
            label="New Password"
            type="password"
            value={newPassword}
            hasValue={!!newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            disabled={isPending}
          />
          <FloatingInput
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            hasValue={!!confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            disabled={isPending}
          />
        </div>
        <Button className="font-semibold h-10" disabled={isPending}>
          {isPending && <Loader className="animate-spin" />}
          Reset Password
        </Button>
      </form>
    </div>
  );
};

export default UpdatePassword;
