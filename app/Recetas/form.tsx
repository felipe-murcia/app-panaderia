
import HeaderModule from "@/src/components/HeaderModule/HeaderModule";
import InputText from "@/src/components/InputText/InputText";
import InputTextArea from "@/src/components/InputTextArea/InputTextArea";
import InputToggle from "@/src/components/InputToggle/InputToggle";
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

        <View style={{ marginVertical: 10 }} />

      <InputText onChangeText={()=>{}} value="" label="Nombre de la receta" placeholder="Nombre de la receta" />
      <InputText onChangeText={()=>{}} value="" label="Temperatura (celsius)" placeholder="120" />
      <InputText onChangeText={()=>{}} value="" label="Tiempo (minuto)" placeholder="200" />
      <InputToggle onValueChange={()=>{}} value={false} label="Picada" />
      <InputText onChangeText={()=>{}} value="" label={""} placeholder="Picada (gramos)" />
      <InputTextArea onChangeText={()=>{}} value="" label="Observaciones" placeholder="..." numberOfLines={4} />
      <InputText onChangeText={()=>{}} value="" label="Cantidad recomendada" placeholder="100 (unidades)" />

        
    </View>
  );
}
