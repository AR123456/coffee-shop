import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
const myImage = require("../../assets/images/coffee-splash.png");
const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={myImage}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <Text style={styles.text}>Coffee Shop</Text>
      </ImageBackground>
    </View>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
