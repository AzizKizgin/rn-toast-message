/** @format */

import React, { ReactNode, useContext, useState } from "react";
import { IShowToast, IToastProps } from "./types";
import ToastMessage from "./ToastMessage";

interface ToastMessageContextProps {
  children: ReactNode;
}

interface ToastMessageContextType {
  showToast: ({ message, type, duration, textStyle }: IShowToast) => void;
}

const ToastMessageContext = React.createContext<ToastMessageContextType>({
  showToast: () => {},
});

const ToastMessageProvider = ({ children }: ToastMessageContextProps) => {
  const [toastSettings, setToastSettings] = useState<IToastProps>({
    message: "",
    type: "success",
    duration: 2000,
    textStyle: {},
  });
  const [isVisible, setIsVisible] = useState(false);

  const showToast = ({ message, type, duration, textStyle }: IShowToast) => {
    setIsVisible(true);
    setToastSettings({
      message,
      type,
      duration,
      textStyle,
    });
  };

  return (
    <ToastMessageContext.Provider value={{ showToast }}>
      {children}
      <ToastMessage
        message={toastSettings.message}
        type={toastSettings.type}
        duration={toastSettings.duration}
        textStyle={toastSettings.textStyle}
        showToast={isVisible}
        setShowToast={setIsVisible}
      />
    </ToastMessageContext.Provider>
  );
};

export const useToast = () => {
  return useContext(ToastMessageContext);
};

export { ToastMessageProvider };
