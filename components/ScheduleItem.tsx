import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";

// Komponen ScheduleItem
const ScheduleItem = ({
  icon,
  title,
  date,
}: {
  icon: any;
  title: string;
  date: string;
}) => {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme ?? 'light'];

  return (
    <View style={styles.scheduleItem}>
      <Ionicons
        name={icon}
        size={20}
        color={themeColors.icon}
        style={{ marginRight: 10 }}
      />
      <View>
        <Text style={[styles.scheduleTitle, { color: themeColors.text }]}>{title}</Text>
        <Text style={[styles.scheduleDate, { color: themeColors.text }]}>{date}</Text>
      </View>
    </View>
  );
};

// Style
const styles = StyleSheet.create({
  scheduleItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  scheduleTitle: {
    fontSize: 14,
    fontWeight: "600",
  },
  scheduleDate: {
    fontSize: 12,
  },
});

export default ScheduleItem;
