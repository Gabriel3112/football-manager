import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";

type ProgressBarProps = {
  progress: number;
  backgroundColor: string;
  progressColor: string;
  width: number;
  height: number;
};

export default function ProgressBar({
  progress,
  backgroundColor,
  progressColor,
  width,
  height = 10,
}: ProgressBarProps) {
  const progressWidth = useSharedValue(progress);

  const animatedStyle = useAnimatedStyle(() => ({
    width: progressWidth.value + "%",
  }));

  useEffect(() => {
    progressWidth.value = withTiming(progress * 100, {
      duration: 500, // Duração da animação
      easing: Easing.linear, // Tipo de easing
    });
  }, []);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: backgroundColor, width: width, height: height },
      ]}
    >
      <Animated.View
        style={[
          styles.progress,
          { backgroundColor: progressColor },
          animatedStyle,
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 10,
    borderRadius: 5,
    overflow: "hidden",
  },
  progress: {
    height: "100%",
    borderRadius: 5,
  },
});
