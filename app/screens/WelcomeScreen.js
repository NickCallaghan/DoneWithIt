import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import colors from "../config/colors";
import Button from "../components/Button";

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={() => navigation.navigate("Listings")} />
        <Button
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate("Listings")}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    padding: 20,
  },
  logoContainer: {
    position: "absolute",
    flex: 1,
    alignItems: "center",
    top: 70,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 15,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 10,
  },
});

export default WelcomeScreen;
