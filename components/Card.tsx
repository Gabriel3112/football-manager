import React from "react";
import { View, StyleSheet, DimensionValue } from "react-native";
import { ThemedText } from "./ThemedText";

interface CardProps {
  backgroundColor: string;
  title: string;
  content?: React.ReactNode;
  iconTitle?: React.ReactNode;
  background?: React.ReactNode;
  backgroundX?: number;
  backgroundY?: number;
  backgroundOpacity?: number;
  backgroundRotate?: number;
  width?: DimensionValue;
  fontSize?: number;
}

export default function Card({
  backgroundColor,
  title,
  content,
  iconTitle,
  background,
  backgroundX = 0,
  backgroundY = 0,
  backgroundOpacity = 1,
  backgroundRotate = 0,
  width = "100%",
  fontSize = 36,
}: CardProps) {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: backgroundColor, width: width }, // Usa a largura fornecida ou padrão
      ]}
    >
      <View style={styles.titleContainer}>
        <ThemedText type="title" style={[styles.title, { fontSize: fontSize }]}>
          {title}
        </ThemedText>
        {iconTitle}
      </View>
      <View style={styles.content}>{content}</View>
      {background && (
        <View
          style={[
            styles.background,
            {
              opacity: backgroundOpacity,
              transform: [{ rotate: `${backgroundRotate}deg` }],
              left: backgroundX,
              bottom: backgroundY,
            },
          ]}
        >
          {background}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    borderRadius: 10,
    minHeight: 165,
    paddingTop: 20,
    paddingLeft: 20,
    overflow: "hidden",
    marginBottom: 20,
  },
  title: {},
  titleContainer: {
    flexDirection: "row",
    maxHeight: 100,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 8,
    width: "100%",
  },
  content: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
    zIndex: 1,
  },
  background: {
    position: "absolute",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    display: "flex",
    overflow: "hidden",
    zIndex: -1,
    flex: 1,
  },
});
