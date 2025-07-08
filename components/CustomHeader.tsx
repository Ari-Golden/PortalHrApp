import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CustomHeader() {
  return (
    <View style={styles.container}>
      {/* Logo atau Avatar */}
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/1144/1144760.png",
        }} // ganti dengan path atau URI
        style={styles.avatar}
      />

      {/* Judul Aplikasi */}
      <Text style={styles.title}>HR Dashboard</Text>

      {/* Ikon profil atau menu */}
      <TouchableOpacity onPress={() => alert("Menu clicked")}>
        <Ionicons name="menu" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "maroon",
    height: 100,
    paddingTop: 45,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 5,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
});
