import InventarioScreen from "@/src/screens/Inventario/Inventario";
import { Stack } from "expo-router";

export default function Recetas() {
  
  return (
    <>
       <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <InventarioScreen /> 
    </>
  );
}
