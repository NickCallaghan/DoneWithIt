import React from "react";
import { View, SafeAreaView, Text, StyleSheet, FlatList } from "react-native";

import ListItem from "../components/ListItem";
import Separator from "../components/Separator";
import Screen from "../components/Screen";
import MenuItem from "../components/MenuItem";
import colors from "../config/colors";

const menuItems = [
  {
    id: 1,
    icon: "format-list-bulleted",
    text: "My Listings",
    bgColor: colors.primary,
  },
  {
    id: 2,
    icon: "email",
    text: "My Messages",
    bgColor: colors.secondary,
  },
];

export default function MyAccountScreen() {
  return (
    <Screen bgColor={colors.light}>
      <View style={styles.myAccount}>
        <Separator />
        <ListItem title="My Account" subtitle="nicholas.callaghan@gmail.com" />
        <Separator />
      </View>

      <FlatList
        data={menuItems}
        keyExtractor={(k) => k.id}
        ItemSeparatorComponent={Separator}
        renderItem={({ item }) => (
          <MenuItem icon={item.icon} text={item.text} bgColor={item.bgColor} />
        )}
      />

      <MenuItem icon="logout" text="Log Out" bgColor="#FFE66D" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  myAccount: {
    marginBottom: 40,
    marginTop: 10,
  },
});
