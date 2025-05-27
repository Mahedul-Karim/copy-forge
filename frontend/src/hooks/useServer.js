import { api } from "@/lib/api";
import { useMutation } from "@tanstack/react-query";
import React from "react";

export const useServer = ({ onSuccess, onError, ...props }) => {
  const res = useMutation({
    mutationFn: ({ endpoint, options }) => api({ endpoint, options }),
    onSuccess,
    onError,
    ...props,
  });

  return res;
};
