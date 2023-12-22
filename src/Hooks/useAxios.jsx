import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://task-manager-server-snowy.vercel.app/",
});

const useAxios = () => {
  return axiosPublic;
};

export default useAxios;
