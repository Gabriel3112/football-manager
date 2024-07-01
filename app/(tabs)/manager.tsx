import { useState } from "react";
import { StyleSheet, View, useColorScheme } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Card from "@/components/Card";
import { Colors } from "@/constants/Colors";
import ProgressBar from "@/components/ProgressBar";
import StadiumIcon from "@/assets/icons/StadiumIcon";
import StadiumIconCard from "@/assets/icons/StadiumIconCard";
import StarRating from "@/components/StarRating";
import { Ionicons } from "@expo/vector-icons";

export default function ManagerScreen() {
  const colorScheme = useColorScheme();
  const [defense, setDefense] = useState(0.5);
  const [mid, setMid] = useState(0.25);
  const [atack, setAtack] = useState(0.8);

  return (
    <ThemedView style={styles.container}>
      <Card
        title="Elenco"
        fontSize={30}
        iconTitle={<StarRating rating={4} />}
        backgroundColor={Colors[colorScheme ?? "light"].surface}
        content={
          <View style={styles.cardContent}>
            <View style={styles.teamStatsContainer}>
              <ThemedText style={{ fontSize: 10 }} type="default">
                Def.
              </ThemedText>
              <ProgressBar
                backgroundColor={Colors[colorScheme ?? "light"].background}
                progress={defense}
                progressColor={Colors[colorScheme ?? "light"].tint}
                width={100}
                height={6}
              />
            </View>
            <View style={styles.teamStatsContainer}>
              <ThemedText style={{ fontSize: 10 }} type="default">
                Mei.
              </ThemedText>
              <ProgressBar
                backgroundColor={Colors[colorScheme ?? "light"].background}
                progress={mid}
                progressColor={Colors[colorScheme ?? "light"].tint}
                width={100}
                height={6}
              />
            </View>
            <View style={styles.teamStatsContainer}>
              <ThemedText style={{ fontSize: 10 }} type="default">
                Ata.
              </ThemedText>
              <ProgressBar
                backgroundColor={Colors[colorScheme ?? "light"].background}
                progress={atack}
                progressColor={Colors[colorScheme ?? "light"].tint}
                width={100}
                height={6}
              />
            </View>
          </View>
        }
        background={
          <StadiumIcon
            width={200}
            height={200}
            color={Colors[colorScheme ?? "light"].text}
            fill={Colors[colorScheme ?? "light"].surface}
          />
        }
        backgroundOpacity={0.05}
        backgroundRotate={45}
        backgroundX={180}
        backgroundY={-20}
      />

      <Card
        title="Estádio"
        fontSize={30}
        iconTitle={<StarRating rating={2.5} />}
        backgroundColor={Colors[colorScheme ?? "light"].surface}
        content={
          <View style={styles.cardContent}>
            <View>
              <ThemedText type="subtitle" style={{ fontSize: 15 }}>
                Nome do Estádio
              </ThemedText>

              <View style={{ flexDirection: "row", gap: 40, marginTop: 10 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 5,
                  }}
                >
                  <Ionicons
                    name="person"
                    size={15}
                    color={Colors[colorScheme ?? "light"].tint}
                  />
                  <ThemedText type="default" style={{ fontSize: 15 }}>
                    50.000
                  </ThemedText>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 5,
                  }}
                >
                  <Ionicons
                    name="ticket"
                    size={15}
                    color={Colors[colorScheme ?? "light"].tint}
                  />
                  <ThemedText type="default" style={{ fontSize: 15 }}>
                    R$ 35,00
                  </ThemedText>
                </View>
              </View>
            </View>
          </View>
        }
        background={
          <StadiumIconCard
            width={200}
            height={200}
            color={Colors[colorScheme ?? "light"].text}
            fill={Colors[colorScheme ?? "light"].text}
          />
        }
        backgroundOpacity={0.05}
        backgroundX={180}
        backgroundY={-20}
      />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Card
          title="Mercado de Transferência"
          fontSize={21}
          backgroundColor={Colors[colorScheme ?? "light"].surface}
          content={
            <View
              style={{ justifyContent: "flex-start", alignItems: "flex-start" }}
            >
              <View></View>
            </View>
          }
          background={
            <Ionicons
              name="cart"
              size={150}
              color={Colors[colorScheme ?? "light"].text}
              fill={Colors[colorScheme ?? "light"].text}
            />
          }
          width={"48%"}
          backgroundOpacity={0.05}
          backgroundX={30}
          backgroundY={10}
        />
        <Card
          title="Financeiro"
          fontSize={21}
          backgroundColor={Colors[colorScheme ?? "light"].surface}
          content={
            <View style={styles.cardContent}>
              <View>
                <ThemedText type="subtitle" style={{ fontSize: 15 }}>
                  R$ 1.000.000,00
                </ThemedText>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 5,
                    marginTop: 10,
                    alignItems: "center",
                  }}
                >
                  <Ionicons
                    name="add"
                    size={15}
                    color={Colors[colorScheme ?? "light"].income}
                  />
                  <ThemedText
                    type="default"
                    style={{
                      fontSize: 15,
                      color: Colors[colorScheme ?? "light"].income,
                    }}
                  >
                    R$ 1.000.000,00
                  </ThemedText>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 5,
                    marginTop: 10,
                    alignItems: "center",
                  }}
                >
                  <Ionicons
                    name="remove"
                    size={15}
                    color={Colors[colorScheme ?? "light"].expense}
                  />
                  <ThemedText
                    type="default"
                    style={{
                      fontSize: 15,
                      color: Colors[colorScheme ?? "light"].expense,
                    }}
                  >
                    R$ 500.000,00
                  </ThemedText>
                </View>
              </View>
            </View>
          }
          background={
            <Ionicons
              name="cash"
              size={150}
              color={Colors[colorScheme ?? "light"].text}
              fill={Colors[colorScheme ?? "light"].text}
            />
          }
          width={"48%"}
          backgroundOpacity={0.05}
          backgroundX={30}
          backgroundY={10}
        />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  cardContent: { justifyContent: "flex-start", alignItems: "flex-start" },
  teamStatsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },
});
