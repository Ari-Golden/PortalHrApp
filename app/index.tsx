import CardIcon from "@/components/CardIcon";
import ScheduleItem from "@/components/ScheduleItem";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme ?? "light"];

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: themeColors.background }]}
    >
      {/* Kehadiran dan Kepulangan */}
      <View
        style={[styles.attendanceBox, { backgroundColor: themeColors.tint }]}
      >
        <Ionicons
          name="time-outline"
          size={24}
          color={themeColors.text}
          style={{ marginRight: 10 }}
        />
        <View style={styles.attendanceRow}>
          <Text style={[styles.attendanceText, { color: themeColors.text }]}>
            Check In: 08:00
          </Text>
          <Text style={[styles.attendanceText, { color: themeColors.text }]}>
            {" "}
            |{" "}
          </Text>
          <Text style={[styles.attendanceText, { color: themeColors.text }]}>
            Check Out: 17:00
          </Text>
        </View>
      </View>

      {/* Icon Cards */}
      <View style={styles.content}>
        <Text style={[styles.sectionTitle, { color: themeColors.text }]}>
          Menu
        </Text>
        <View style={styles.cardRow}>
          <CardIcon icon="calendar" label="Cuti" href="/screens/leave" />
          <CardIcon icon="hourglass" label="Lembur" href="/screens/overtime" />
          <CardIcon
            icon="document-text"
            label="Slip Gaji"
            href="/screens/payslip"
          />
          <CardIcon icon="stats-chart" label="KPI" href="/screens/kpi" />
          <CardIcon icon="school" label="Training" href="/screens/training" />
          <CardIcon icon="briefcase" label="Job" href="/screens/job" />
          <CardIcon icon="cash-outline" label="Tax" href="/screens/tax" />
          <CardIcon icon="people" label="Family" href="/screens/family" />
        </View>

        {/* Aktivitas Perusahaan */}
        <View
          style={[styles.scheduleBox, { backgroundColor: themeColors.card }]}
        >
          <Text style={[styles.sectionTitle, { color: themeColors.text }]}>
            Aktivitas Perusahaan
          </Text>
          <ScheduleItem
            icon="calendar-outline"
            title="Rapat Divisi Marketing"
            date="10 Juli 2025"
          />
          <ScheduleItem
            icon="calendar-outline"
            title="Pelatihan Komunikasi"
            date="15 - 16 Juli 2025"
          />
          <ScheduleItem
            icon="calendar-outline"
            title="Family Gathering"
            date="20 Juli 2025"
          />
        </View>
      </View>
    </ScrollView>
  );
}

// Style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  attendanceBox: {
    marginHorizontal: 16,
    borderRadius: 12,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  attendanceRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  attendanceText: {
    fontSize: 16,
    marginTop: 5,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  cardRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "22%",
    aspectRatio: 1,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  iconCircle: {
    padding: 12,
    borderRadius: 999,
    marginBottom: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 2,
  },
  cardLabel: {
    fontWeight: "600",
    fontSize: 13,
    textAlign: "center",
  },
  scheduleBox: {
    marginTop: 24,
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowRadius: 1,
    elevation: 1,
  },
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
