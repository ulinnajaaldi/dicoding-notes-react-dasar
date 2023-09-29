import { toast } from "react-toastify";

export const toastNotify = ({ type, message }) => {
  return toast[type](message);
};
