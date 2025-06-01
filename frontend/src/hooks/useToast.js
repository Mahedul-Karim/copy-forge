import React from "react";
import { toast } from "sonner";

export const useToast = () => {
  const success = (title) => {
    toast.success(title);
  };

  const warning = (title) => {
    toast.warning(title);
  };
  const error = (title) => {
    toast.error(title);
  };

  return { success, warning, error };
};
