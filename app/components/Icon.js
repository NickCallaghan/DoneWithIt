import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function Icon({
  icon = "close",
  bgColor = "#000",
  size = 40,
  iconColor = "#FFF",
}) {
  return (
    <View
      style={{
        ...styles.iconContainer,
        backgroundColor: bgColor,
        borderRadius: size,
      }}
    >
      <MaterialCommunityIcons
        style={styles.icon}
        name={icon}
        size={size / 2}
        color={iconColor}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    width: 46,
    height: 46,
    borderRadius: 23,
    marginHorizontal: 20,
  },
  icon: {
    overflow: "hidden",
  },
});
