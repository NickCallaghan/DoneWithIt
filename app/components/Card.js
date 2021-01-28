import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import colors from "../config/colors";

export default function Button({
  title = "Red Jacket for sale!",
  subtitle = "$100",
  image = require("../assets/jacket.jpg"),
}) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} resizeMode="cover" />
      <View style={styles.textArea}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 15,
    width: "100%",
    marginBottom: 20,
    overflow: "hidden",
  },
  title: {
    color: colors.black,
    fontWeight: "500",
    fontSize: 15,
    marginBottom: 10,
  },
  textArea: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  image: {
    width: "100%",
    height: 180,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 16,
  },
});
