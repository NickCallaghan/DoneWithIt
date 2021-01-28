import React from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";

import colors from "../config/colors";

export default function Button({ title, onPress, color = "primary" }) {
  return (
    <TouchableHighlight
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
});
