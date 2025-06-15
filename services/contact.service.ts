import { axiosApi } from "@/configs/axios";

export const createContactMessage = async (data: any) => {
  return await axiosApi<any>({ method: "post", url: "/contact-message/create", data });
};