import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

import Constants from "expo-constants";

export default function Screen({ children, bgColor = "#FFF" }) {
  return (
    <SafeAreaView style={{ ...styles.screen, backgroundColor: bgColor }}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  container: {
    paddingHorizontal: 20,
  },
});
