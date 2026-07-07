import { Appearance, StyleSheet, Text, View } from "react-native";
import { Colors } from "@/constants/Colors";

export default function MenuScreen() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
}

const styles = StyleSheet.create({});
