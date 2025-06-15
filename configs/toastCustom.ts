import { Bounce, toast } from "react-toastify";

export const toastCustom = (data: {
  message?: string;
  type?: "success" | "error" | "info" | "warning" | null;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  autoClose?: number;
  icon?: any;
  theme?: "light" | "dark" | "colored";
  hideProgressBar?: boolean;
}) => {
  const { 
    message = 'success!', 
    type = null,
    position = 'top-right',
    autoClose = 2000,
    icon = null,
    theme = "light",
    hideProgressBar = true,
  } = data;

  if (type) {
    return toast[type](message, {
      position: position,
      autoClose: autoClose,
      hideProgressBar: hideProgressBar,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: theme,
      transition: Bounce,
      icon: icon,
    });
  } else {
    return toast(message, {
      position: position,
      autoClose: autoClose,
      hideProgressBar: hideProgressBar,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: theme,
      transition: Bounce,
      icon: icon,
    });
  }
};
