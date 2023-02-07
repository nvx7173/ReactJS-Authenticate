import { UserAccountInterface } from "../redux/interface";
import axiosClient from "./axiosClient";

export const login = (user: UserAccountInterface) => {
  return axiosClient.post("https://authenticate-app-server-danhnv.herokuapp.com/api/signin", { ...user });
};