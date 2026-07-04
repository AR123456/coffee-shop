import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
// to determine light or dark color scheme
import { Appearance } from "react-native";
import { Colors } from "@/constants/Colors";
export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* <Stack.Screen name="(coffee)" options={{ headerShown: false }} /> */}
        {/* <Stack.Screen
          name="index"
          options={{ title: "Home", headerShown: false }}
        />
        <Stack.Screen name="contact" options={{ title: "Contact Me" }} /> */}
        <Stack.Screen name="+not-found" />
        {/* <Stack.Screen
          name="modal"
          options={{ presentation: "modal", title: "Modal" }}
        /> */}
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
