import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";

const useTodos = () => {
  const { user } = useContext(AuthContext);

  const axios = useAxios();
  const {
    data: todos = [],
    refetch,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["todos", user?.email],
    queryFn: async () => {
      const res = await axios.get(`/todos/${user?.email}`);
      return res.data;
    },
  });
  return [todos, refetch, isLoading];
};

export default useTodos;
