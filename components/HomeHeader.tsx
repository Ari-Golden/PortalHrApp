import { Ionicons } from "@expo/vector-icons"; // Pastikan ini terinstal
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface HomeHeaderProps {
  userName: string;
  userProfilePic: string; // URL atau path gambar
  appName: string;
  unreadNotifications: number;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({
  userName,
  userProfilePic,
  appName,
  unreadNotifications,
}) => {
  return (
    <View style={styles.container}>
      {/* Left Section: App Name & Greeting */}
      <View style={styles.leftSection}>
        <Text style={styles.appName}>{appName}</Text>
        <Text style={styles.greeting}>Halo, {userName}!</Text>
      </View>

      {/* Right Section: Profile, Notifications, Settings */}
      <View style={styles.rightSection}>
        {/* Profile Picture */}
        <TouchableOpacity style={styles.profileButton}>
          <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/1144/1144760.png" }} style={styles.profileImage} />
        </TouchableOpacity>

        {/* Notifications */}
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="notifications-outline" size={24} color="black" />
          {unreadNotifications > 0 && (
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationText}>{unreadNotifications}</Text>
            </View>
          )}
        </TouchableOpacity>

        {/* Settings/Menu */}
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="menu-outline" size={28} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    paddingTop: 45,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff", // Warna latar belakang header
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    
  },
  leftSection: {
    flex: 1,
  },
  appName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  greeting: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileButton: {
    marginRight: 15,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#e0e0e0", // Placeholder background
  },
  iconButton: {
    marginLeft: 15,
    position: "relative",
  },
  notificationBadge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "red",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default HomeHeader;
