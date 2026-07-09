import {
  Appearance,
  StyleSheet,
  Platform,
  SafeAreaView,
  FlatList,
  ScrollView,View,Text,Image
} from "react-native";
import { Colors } from "@/constants/Colors";
import {MENU_ITEMS} from "@/constants/MenuItems";
import MENU_IMAGES from "@/constants/MenuImages";

export default function MenuScreen() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  // styles function
  const styles = createStyles(theme, colorScheme);
  // define containter for app web vs mobile to render flat list -need imports
  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;
  return (
    <Container>
   
      <FlatList data={MENU_ITEMS} renderItem={({item})=>()}></FlatList>
    </Container>
  );
}

function createStyles(theme, colorScheme) {
  return StyleSheet.create({});
}
