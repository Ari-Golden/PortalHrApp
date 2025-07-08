import HomeHeader from "@/components/HomeHeader";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        header: () => (
          <HomeHeader
            userName={"Ari Suseno"}
            userProfilePic={""}
            appName={"Portal Hr Mobile"}
            unreadNotifications={1}
          />
        ), // ✅ gunakan custom header
      }}
    />
  );
}
