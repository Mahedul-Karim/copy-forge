import { api } from "@/lib/api";
import { useMutation } from "@tanstack/react-query";
import React from "react";

export const useServer = ({ handleMutate, onSuccess, onError, ...props }) => {
  const res = useMutation({
    mutationFn: handleMutate ? handleMutate : ({ endpoint, options }) => api({ endpoint, options }),
    onSuccess,
    onError,
    ...props,
  });

  return res;
};
