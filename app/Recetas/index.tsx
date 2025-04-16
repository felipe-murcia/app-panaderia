import RecetasScreen from "@/src/screens/Recetas/Recetas";
import { Stack } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Recetas() {
  return (
    <>
       <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <RecetasScreen/> 
    </>
  );
}
