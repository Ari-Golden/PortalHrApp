import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Komponen CardIcon
const CardIcon = ({
  icon,
  label,
  href,
}: {
  icon: any;
  label: string;
  href: string;
}) => {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme ?? "light"];
  const router = useRouter();

  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: themeColors.card }]}
      onPress={() => router.push(href)}
    >
      <View style={[styles.iconCircle, { backgroundColor: themeColors.tint }]}>
        <Ionicons name={icon} size={26} color={themeColors.text} />
      </View>
      <Text
        style={[styles.cardLabel, { color: themeColors.text }]}
        numberOfLines={1}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

// Style
const styles = StyleSheet.create({
  card: {
    width: "22%",
    aspectRatio: 1,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    padding: 8,
  },
  iconCircle: {
    padding: 12,
    borderRadius: 999,
    marginBottom: 6,
    shadowColor: "#000",
  },
  cardLabel: {
    fontWeight: "600",
    fontSize: 13,
    textAlign: "center",
  },
});

export default CardIcon;
