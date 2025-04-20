
import React, { useState } from "react";
import Button from "@/src/components/Button/Button";
import ButtonDashed from "@/src/components/ButtonDashed/Button";
import HeaderModule from "@/src/components/HeaderModule/HeaderModule";
import InputText from "@/src/components/InputText/InputText";
import InputTextArea from "@/src/components/InputTextArea/InputTextArea";
import InputToggle from "@/src/components/InputToggle/InputToggle";
import Label from "@/src/components/Label/Label";
import { Stack } from "expo-router";
import { Text, View, ScrollView, Modal } from "react-native";
import { IProducto } from "@/interfaces/Producto";

export default function FormInventario() {

  const [ producto, setProducto ] = useState<IProducto>({
    nombre:'',
    precio: 0,
    observacion: '',
    stock: 0,
    disponible:true,
  })

  const handleSave = () => {
    console.log(producto)
  }
  
  return (
    <View style={{ flex: 1, padding: 20 }}>
       <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <HeaderModule title="Formulario" icon="plus" onPress={()=>console.log('Button pressed!')}/>

        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingTop: 20 }}>
        
          <InputText onChangeText={(value:string)=>setProducto({ ...producto, nombre: value })} value={producto.nombre} label="Nombre" placeholder="Ej.: Croaisant" />
          <InputText onChangeText={(value:number)=>setProducto({ ...producto, precio: value })} value={producto.precio} label="Precio" placeholder="1000"  keyboardType="numeric" />
          <InputText onChangeText={(value:number)=>setProducto({ ...producto, stock: value })} value={producto.stock} label="Cantidad inicial" placeholder="20"  keyboardType="numeric" />
          <InputToggle onValueChange={(value:boolean)=>setProducto({ ...producto, disponible: value })} value={producto.disponible} label="Disponible" />
          <InputTextArea onChangeText={(value:string)=>setProducto({ ...producto, observacion: value })} value={producto.observacion} label="Observaciones" placeholder="..." numberOfLines={4} />
    
          <Button title="Guardar" onPress={()=>handleSave()} color="#4caf50"  style={{ marginTop: 20 }}/>

        </ScrollView>

  

        
    </View>
  );
}
