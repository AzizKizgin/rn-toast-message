/** @format */

import { Text } from "react-native";
import React, { FC, useEffect } from "react";
import { IToastMessageProps } from "./types";
import { COLORS, finalPosition, initialPosition } from "./consts";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";

const ToastMessage: FC<IToastMessageProps> = (props) => {
  const {
    message,
    showToast,
    type,
    setShowToast,
    duration = 2000,
    textStyle = {},
  } = props;

  let toastColor = COLORS.SUCCESS;
  switch (type) {
    case "success":
      toastColor = COLORS.SUCCESS;
      break;
    case "error":
      toastColor = COLORS.ERROR;
      break;
    case "warning":
      toastColor = COLORS.WARNING;
      break;
    case "info":
      toastColor = COLORS.INFO;
      break;
    default:
      toastColor = COLORS.SUCCESS;
      break;
  }

  const toastPosition = useSharedValue(initialPosition);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      bottom: toastPosition.value,
    };
  });

  useEffect(() => {
    if (showToast) {
      toastPosition.value = withTiming(
        finalPosition,
        { duration: 500 },
        (isFinished) => {
          if (isFinished) {
            toastPosition.value = withDelay(
              duration,
              withTiming(initialPosition, { duration: 500 }, (isFinished) => {
                if (isFinished) {
                  setShowToast && runOnJS(setShowToast)(false);
                }
              }),
            );
          }
        },
      );
    }
  }, [showToast]);

  return (
    <Animated.View
      style={[
        {
          display: showToast ? "flex" : "none",
          position: "absolute",
          alignSelf: "center",
          width: "85%",
          paddingVertical: 12,
          backgroundColor: toastColor,
          alignItems: "center",
          justifyContent: "center",
          zIndex: 999,
          borderRadius: 10,
        },
        animatedStyle,
      ]}
    >
      <Text
        style={[
          {
            color: "#fff",
          },
          textStyle,
        ]}
      >
        {message}
      </Text>
    </Animated.View>
  );
};

export default ToastMessage;
