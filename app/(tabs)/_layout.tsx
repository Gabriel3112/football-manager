import { Tabs } from "expo-router";
import React from "react";
import { TabBar } from "@/components/navigation/TabBar";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "react-native";
export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: true,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontSize: 30,
          fontWeight: "bold",
        },
        headerStyle: {
          backgroundColor: Colors[colorScheme ?? "light"].background,
        },
      }}
    >
      <Tabs.Screen
        name="coach"
        options={{
          title: "Técnico",
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: "Calendário",
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Partida",
        }}
      />
      <Tabs.Screen
        name="manager"
        options={{
          title: "Gestão do Time",
        }}
      />
      <Tabs.Screen
        name="news"
        options={{
          title: "Notícias",
        }}
      />
    </Tabs>
  );
}
