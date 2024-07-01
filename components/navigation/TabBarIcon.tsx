import React from "react";
import { Pressable, StyleSheet, LayoutChangeEvent } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import StadiumIcon from "@/assets/icons/StadiumIcon";
import StadiumIconOutline from "@/assets/icons/StadiumIconOutline";

type TabBarIconProps = {
  onPress: () => void;
  focused: boolean;
  routeName: string;
  activeColor: string;
  fillColor: string;
  onLayout: (event: LayoutChangeEvent) => void;
};

const TabBarIcon: React.FC<TabBarIconProps> = ({
  onPress,
  focused,
  routeName,
  activeColor,
  fillColor,
  onLayout,
}) => {
  const renderIcon = () => {
    switch (routeName) {
      case "coach":
        return focused ? (
          <Ionicons name="person" color={activeColor} size={28} />
        ) : (
          <Ionicons name="person-outline" color={activeColor} size={28} />
        );
      case "calendar":
        return focused ? (
          <Ionicons name="calendar" color={activeColor} size={28} />
        ) : (
          <Ionicons name="calendar-outline" color={activeColor} size={28} />
        );
      case "index":
        return focused ? (
          <Ionicons name="football" color={activeColor} size={45} />
        ) : (
          <Ionicons name="football-outline" color={activeColor} size={45} />
        );
      case "manager":
        return focused ? (
          <StadiumIcon
            width={30}
            height={30}
            color={activeColor}
            fill={fillColor}
          />
        ) : (
          <StadiumIconOutline width={30} height={30} color={activeColor} />
        );
      case "news":
        return focused ? (
          <Ionicons name="newspaper" color={activeColor} size={28} />
        ) : (
          <Ionicons name="newspaper-outline" color={activeColor} size={28} />
        );
      default:
        return null;
    }
  };

  return (
    <Pressable style={styles.container} onLayout={onLayout} onPress={onPress}>
      {renderIcon()}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TabBarIcon;
