import React, { ReactNode } from "react";
import { ScrollView, StyleSheet, View, ViewStyle } from "react-native";

type Props = {
  children: ReactNode;
  headerImage?: ReactNode;
  headerBackgroundColor?: { light: string; dark: string };
  style?: ViewStyle;
};

export default function ParallaxScrollView({
  children,
  headerImage,
  headerBackgroundColor = { light: "#f0f0f0", dark: "#333" },
  style,
}: Props) {
  return (
    <ScrollView style={[styles.container, style]}>
      <View
        style={[
          styles.header,
          { backgroundColor: headerBackgroundColor.light },
        ]}
      >
        {headerImage}
      </View>
      <View style={styles.body}>{children}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  body: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
});
