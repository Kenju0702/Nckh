import axiosInstance from "./axiosInstance";


export const getProvider = async () => {
  const response = await axiosInstance.get(`/sanpham`);
  return response.data;
};