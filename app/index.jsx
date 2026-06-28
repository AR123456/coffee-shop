import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Link } from "expo-router";

import icedCoffeeImg from "@/assets/images/iced-coffee.png";

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={icedCoffeeImg} style={styles.image}>
        <Text style={styles.text}>Coffee Shop</Text>
        <Link style={styles.link} href="/explore">
          Explore
        </Link>
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
    backgroundColor: "rgba(0,0,0,0.5)",
    marginBottom: 120,
  },
  link: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    textDecorationLine: "underline",
    padding: 4,

    backgroundColor: "rgba(0,0,0,0.5)",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
});
