import React from "react";
import { View, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

interface StarRatingProps {
  rating: number; // Valor do rating (0 a 5)
}

export default function StarRating({ rating }: StarRatingProps) {
  const colorScheme = useColorScheme();

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating); // Número de estrelas cheias
    const hasHalfStar = rating - fullStars >= 0.5; // Verifica se há meia estrela

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <Ionicons
            key={i}
            name="star"
            size={20}
            color={Colors[colorScheme ?? "light"].tint}
            style={styles.star}
          />
        );
      } else if (hasHalfStar && i === fullStars + 1) {
        stars.push(
          <Ionicons
            key={i}
            name="star-half" // Ícone de meia estrela
            size={20}
            color={Colors[colorScheme ?? "light"].tint}
            style={styles.star}
          />
        );
      } else {
        stars.push(
          <Ionicons
            key={i}
            name="star-outline"
            size={20}
            color={Colors[colorScheme ?? "light"].tint}
            style={styles.star}
          />
        );
      }
    }
    return stars;
  };

  return <View style={styles.container}>{renderStars()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  star: {
    marginRight: 2,
  },
});
