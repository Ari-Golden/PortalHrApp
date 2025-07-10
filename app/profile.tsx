// app/EmployeeProfileScreen.tsx

import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

export default function EmployeeProfileScreen() {
  const employee = {
    name: "Ari Suseno",
    position: "Recruitment & Training Manager",
    department: "Human Resources",
    employeeId: "EMP123456",
    phone: "0878-7051-2200",
    email: "ari.suseno@hpm.co.id",
    address: "Cluster Mutiara Blok Intan 3 no 5, Karawang, Jawa Barat",
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: employee.photo }} style={styles.avatar} />
        <Text style={styles.name}>{employee.name}</Text>
        <Text style={styles.position}>{employee.position}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informasi Karyawan</Text>
        <Text style={styles.item}>ID: {employee.employeeId}</Text>
        <Text style={styles.item}>Departemen: {employee.department}</Text>
        <Text style={styles.item}>Email: {employee.email}</Text>
        <Text style={styles.item}>No. HP: {employee.phone}</Text>
        <Text style={styles.item}>Alamat: {employee.address}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F4F4F5",
    flex: 1,
  },
  header: {
    alignItems: "center",
    paddingVertical: 30,
    backgroundColor: "#2563EB",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 9999,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  position: {
    fontSize: 16,
    color: "white",
    marginTop: 4,
  },
  section: {
    padding: 20,
    backgroundColor: "white",
    marginTop: 10,
    borderRadius: 10,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    color: "#111827",
  },
  item: {
    fontSize: 16,
    marginBottom: 6,
    color: "#374151",
  },
});
