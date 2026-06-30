import { Link, Stack } from "expo-router";
import { View, Text } from "react-native";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function NotFound() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <ThemedView>
        <ThemedText>This screen doesn&apos;t exist.</ThemedText>
        <Link href="/">
          <ThemedText>Go home</ThemedText>
        </Link>
      </ThemedView>
    </>
  );
}
