import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";

const useCompleted = () => {
  const { user } = useContext(AuthContext);

  const axios = useAxios();
  const {
    data: completed = [],
    refetch,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["completed", user?.email],
    queryFn: async () => {
      const res = await axios.get(`/todos/completed/${user?.email}`);
      return res.data;
    },
  });
  return [completed, refetch, isLoading];
};

export default useCompleted;
