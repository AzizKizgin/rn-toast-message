/** @format */

import { TextStyle } from "react-native";

export type ToastType = "success" | "error" | "warning" | "info";
export interface IShowToast {
  message: string;
  type: ToastType;
  duration?: number;
  textStyle?: TextStyle;
}

export interface IToastProps {
  message: string;
  type: ToastType;
  duration?: number;
  textStyle?: TextStyle;
}

export interface IToastMessageProps extends IToastProps {
  showToast: boolean;
  setShowToast: (showToast: boolean) => void;
}
