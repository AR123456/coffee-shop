import { Appearance, StyleSheet, Platform, SafeAreaView } from "react-native";
import { Colors } from "@/constants/Colors";
import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";

export default function MenuScreen() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  // styles function
  const styles = createStyles(theme, colorScheme);
  // define containter for app web vs mobile to render flat list -need imports
  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;
}

function createStyles(theme, colorScheme) {
  return StyleSheet.create({});
}
