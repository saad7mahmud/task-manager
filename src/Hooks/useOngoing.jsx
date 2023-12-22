import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";

const useOngoing = () => {
  const { user } = useContext(AuthContext);

  const axios = useAxios();
  const {
    data: ongoing = [],
    refetch,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["ongoing", user?.email],
    queryFn: async () => {
      const res = await axios.get(`/todos/ongoing/${user?.email}`);
      return res.data;
    },
  });
  return [ongoing, refetch, isLoading];
};

export default useOngoing;
