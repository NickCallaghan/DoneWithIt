import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import colors from "../config/colors";
import Screen from "../components/Screen";
import Card from "../components/Card";

const listings = [
  {
    id: 1,
    title: "Red jacket for a sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch for a sale",
    price: 100,
    image: require("../assets/couch.jpg"),
  },
];

export default function ListingsScreen() {
  return (
    <Screen bgColor={colors.light}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card title={item.title} image={item.image} />
        )}
      />
    </Screen>
  );
}
