import {
  Appearance,
  StyleSheet,
  Platform,
  SafeAreaView,
  FlatList,
  ScrollView,
  View,
  Text,
  Image,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { MENU_ITEMS } from "@/constants/MenuItems";
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
      <FlatList
        data={MENU_ITEMS}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <View>
              <Text></Text>
              <Text></Text>
            </View>
            <Image source={MENU_IMAGES[item.id - 1]}></Image>
          </View>
        )}
      ></FlatList>
    </Container>
  );
}

function createStyles(theme, colorScheme) {
  return StyleSheet.create({});
}
