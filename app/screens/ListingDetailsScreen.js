import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import ListItem from "../components/ListItem";

import colors from "../config/colors";

export default function Button({
  title = "Red Jacket for sale!",
  subtitle = "$100",
  image = require("../assets/jacket.jpg"),
}) {
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={image} resizeMode="cover" />
      <View style={styles.textArea}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{subtitle}</Text>
      </View>
      <View style={styles.userContainer}>
        <ListItem title="Mosh Hamedani" subtitle="5 Listings" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.white,
  },
  title: {
    color: colors.black,
    fontWeight: "500",
    fontSize: 24,
    marginBottom: 10,
  },
  textArea: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
  },
  userContainer: {
    marginVertical: 20,
  },
});
