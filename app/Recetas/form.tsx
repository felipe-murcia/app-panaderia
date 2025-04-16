
import HeaderModule from "@/src/components/HeaderModule/HeaderModule";
import { Stack } from "expo-router";
import { Button, Text, View } from "react-native";

export default function FormReceta() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
       <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <HeaderModule title="Formulario" icon="plus" onPress={()=>console.log('Button pressed!')}/>

        
    </View>
  );
}
