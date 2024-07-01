import React, {
  useCallback,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  LayoutChangeEvent,
} from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import TabBarIcon from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import Animated, {
  Easing,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

export function TabBar({ state, navigation }: BottomTabBarProps) {
  const [layout, setLayout] = useState<{ x: number; width: number }[]>([]);
  const colorScheme = useColorScheme();

  const handleLayout = (event: LayoutChangeEvent, index: number) => {
    const { x, width } = event.nativeEvent.layout;

    setLayout(() => {
      const newLayout = [...layout];
      newLayout[index] = {
        x: x,
        width: width,
      };
      return newLayout;
    });
  };

  const animatedStyle = useAnimatedStyle(() => {
    const activeLayout = layout[state.index];
    if (!activeLayout) return { transform: [{ translateX: 0 }] };

    return {
      transform: [
        {
          translateX: withTiming(
            activeLayout.x + activeLayout.width / 2 - 7.5,
            {
              duration: 250,
              easing: Easing.bezier(0.25, 0.1, 0.25, 1), // Easing mais suave
            }
          ),
        },
      ],
    };
  });

  return (
    <View
      style={[
        styles.tabbar,
        { backgroundColor: Colors[colorScheme ?? "light"].surface },
      ]}
    >
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const handleTabPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <TabBarIcon
            key={route.key}
            onLayout={(e) => handleLayout(e, index)}
            onPress={() => handleTabPress()}
            focused={isFocused}
            routeName={route.name}
            activeColor={Colors[colorScheme ?? "light"].tabIconSelected}
            fillColor={Colors[colorScheme ?? "light"].background}
          />
        );
      })}
      <Animated.View
        style={[
          {
            backgroundColor: Colors[colorScheme ?? "light"].tabIconSelected,
          },
          styles.indicator,
          animatedStyle,
        ]}
      ></Animated.View>
    </View>
  );
}
const styles = StyleSheet.create({
  tabbar: {
    position: "absolute",
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 2,
    borderRadius: 15,
    height: 77,
    borderTopWidth: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  indicator: {
    position: "absolute",
    bottom: 10,
    width: 15,
    height: 5,
    borderRadius: 10,
  },
});
