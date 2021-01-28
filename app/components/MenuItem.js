import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Icon from "./Icon";

import colors from "../config/colors";

export default function MenuItem({
  icon = "close",
  text = "Menu Text",
  bgColor,
}) {
  return (
    <View style={styles.menuItem}>
      <Icon icon={icon} bgColor={bgColor} />
      <View style={styles.menuItemTextContainer}>
        <Text style={styles.menuItemText}>{text}</Text>
      </View>
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
  menuItem: {
    flexDirection: "row",
    paddingVertical: 10,
    backgroundColor: colors.white,
  },
  menuItemText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  menuItemTextContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
