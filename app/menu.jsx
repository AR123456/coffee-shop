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

  const styles = createStyles(theme, colorScheme);
  // container for app web vs mobile to render flat list
  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;
  // can style this view here and or in the flatlist itself
  const separatorComp = <View style={styles.separator} />;
  return (
    <Container>
      <FlatList
        data={MENU_ITEMS}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        //  separator using a component
        ItemSeparatorComponent={separatorComp}
        renderItem={({ item }) => (
          <View>
            <View>
              <Text>{item.title}</Text>
              <Text>{item.description}</Text>
            </View>
            <Image source={MENU_IMAGES[item.id - 1]} />
          </View>
        )}
      ></FlatList>
    </Container>
  );
}

function createStyles(theme, colorScheme) {
  return StyleSheet.create({
    contentContainer: {
      paddingTop: 10,
      paddingBottom: 20,
      paddingHorizontal: 12,
      backgroundColor: theme.background,
    },
    separator: {
      height: 1,
      backgroundColor: colorScheme === "dark" ? "papayawhip" : "#000",
      width: "50%",
      maxWidth: 300,
      marginHorizontal: "auto",
      marginBottom: 10,
    },
  });
}
