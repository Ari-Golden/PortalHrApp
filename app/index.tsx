import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      {/* Kehadiran dan Kepulangan */}
      <View style={styles.attendanceBox}>
        <Ionicons
          name="time-outline"
          size={24}
          color="#fff"
          style={{ marginRight: 10 }}
        />
        <View style={styles.attendanceRow}>
          <Text style={styles.attendanceText}>Check In: 08:00</Text>
          <Text style={styles.attendanceText}> | </Text>
          <Text style={styles.attendanceText}>Check Out: 17:00</Text>
        </View>
      </View>

      {/* Icon Cards */}
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Menu</Text>
        <View style={styles.cardRow}>
          <CardIcon icon="calendar" label="Cuti" onPress={() => {}} />
          <CardIcon icon="hourglass" label="Lembur" onPress={() => {}} />
          <CardIcon icon="document-text" label="Slip Gaji" onPress={() => {}} />
          <CardIcon icon="stats-chart" label="KPI" onPress={() => {}} />
          <CardIcon icon="school" label="Training" onPress={() => {}} />
          <CardIcon icon="briefcase" label="Job" onPress={() => {}} />
          <CardIcon icon="cash-outline" label="Tax" onPress={() => {}} />
          <CardIcon icon="people" label="Family" onPress={() => {}} />
        </View>

        {/* Aktivitas Perusahaan */}
        <View style={styles.scheduleBox}>
          <Text style={styles.sectionTitle}>Aktivitas Perusahaan</Text>
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

// Komponen CardIcon
const CardIcon = ({
  icon,
  label,
  onPress,
}: {
  icon: any;
  label: string;
  onPress: () => void;
}) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <View style={styles.iconCircle}>
      <Ionicons name={icon} size={26} color="#fff" />
    </View>
    <Text style={styles.cardLabel} numberOfLines={1}>
      {label}
    </Text>
  </TouchableOpacity>
);

// Komponen ScheduleItem
const ScheduleItem = ({
  icon,
  title,
  date,
}: {
  icon: any;
  title: string;
  date: string;
}) => (
  <View style={styles.scheduleItem}>
    <Ionicons
      name={icon}
      size={20}
      color="#6b21a8"
      style={{ marginRight: 10 }}
    />
    <View>
      <Text style={styles.scheduleTitle}>{title}</Text>
      <Text style={styles.scheduleDate}>{date}</Text>
    </View>
  </View>
);

// Style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    paddingTop: 50,
  },
  attendanceBox: {
    backgroundColor: "#c2185b",
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
    color: "#fff",
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
    color: "#333",
  },
  cardRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#f9a8d4",
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
    backgroundColor: "#ec4899",
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
    color: "#333",
    fontWeight: "600",
    fontSize: 13,
    textAlign: "center",
  },
  scheduleBox: {
    marginTop: 24,
    backgroundColor: "#ffe4e6",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
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
    color: "#111827",
  },
  scheduleDate: {
    fontSize: 12,
    color: "#6b7280",
  },
});
