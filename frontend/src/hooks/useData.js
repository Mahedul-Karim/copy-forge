import { api } from "@/lib/api";
import { useQuery, useQueries } from "@tanstack/react-query";
import React from "react";

export const useData = ({ queryKey, endpoint }) => {
  const res = useQuery({
    queryKey,
    queryFn: () => api({ endpoint, options: { method: "GET" } }),
    retry: false,
  });

  return res;
};

export const useDatas = ({ queries }) => {
  return useQueries({
    queries: queries.map(({ queryKey, endpoint }) => ({
      queryKey,
      queryFn: () => api({ endpoint, options: { method: "GET" } }),
      retry: false,
    })),
  });
};
