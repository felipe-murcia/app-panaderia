import Main from "@/src/screens/Main";
import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <>
     <Stack.Screen
            options={{
              headerShown: false,
            }}
          />
    <Main/>
    </>
  );
}
