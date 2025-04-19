
import React from "react";
import Button from "@/src/components/Button/Button";
import ButtonDashed from "@/src/components/ButtonDashed/Button";
import HeaderModule from "@/src/components/HeaderModule/HeaderModule";
import InputText from "@/src/components/InputText/InputText";
import InputTextArea from "@/src/components/InputTextArea/InputTextArea";
import InputToggle from "@/src/components/InputToggle/InputToggle";
import Label from "@/src/components/Label/Label";
import { Stack } from "expo-router";
import { Text, View, ScrollView, Modal } from "react-native";

export default function FormReceta() {

  const [modalVisible, setModalVisible] = React.useState(false);
  const [ingredientes, setIngredientes] = React.useState([
    { id: 1, nombre: "Ingrediente 1", cantidad: "100" },
    { id: 2, nombre: "Ingrediente 2", cantidad: "200" },
  ]);
  const [ingrediente, setIngrediente] = React.useState({ nombre: "", cantidad: "" });

  const handleSaveIngredient = () => {
    if (ingrediente.nombre && ingrediente.cantidad) {
      setIngredientes([...ingredientes, { id: ingredientes.length + 1, ...ingrediente }]);
      setIngrediente({ nombre: "", cantidad: "" });
      setModalVisible(false);
    }
  };
  
  return (
    <View style={{ flex: 1, padding: 20 }}>
       <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <HeaderModule title="Formulario" icon="plus" onPress={()=>console.log('Button pressed!')}/>

        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
        
          <InputText onChangeText={()=>{}} value="" label="Nombre de la receta" placeholder="Nombre de la receta" />
          <InputText onChangeText={()=>{}} value="" label="Temperatura (celsius)" placeholder="120" />
          <InputText onChangeText={()=>{}} value="" label="Tiempo (minuto)" placeholder="200" />
          <InputToggle onValueChange={()=>{}} value={false} label="Picada" />
          <InputText onChangeText={()=>{}} value="" label={""} placeholder="Picada (gramos)" />
          <InputTextArea onChangeText={()=>{}} value="" label="Observaciones" placeholder="..." numberOfLines={4} />
          <InputText onChangeText={()=>{}} value="" label="Cantidad recomendada" placeholder="100 (unidades)" />

          <Text style={{ fontSize: 16, fontFamily: "PoppinsMedium"}}>Ingredientes</Text>

          {ingredientes.map((item) => (
            <View key={item.id} style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 1, borderColor: "#c1c1c1", marginBottom:5   }}>  
              <Text style={{ fontSize: 14, fontFamily: "PoppinsLight"}}>{item.nombre}</Text>
              <Text style={{ fontSize: 16, fontFamily: "PoppinsLight"}}>{item.cantidad}g</Text>
            </View>
          ))}

          <View style={{ height: 10 }} />

          <ButtonDashed title="Agregar" onPress={()=>setModalVisible(!modalVisible)} color="#f44336" />

          <Button title="Guardar" onPress={()=>setModalVisible(!modalVisible)} color="#4caf50"  style={{ marginTop: 20 }}/>



        </ScrollView>

        <View style={{ marginVertical: 10 }} />

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <View style={{ width: "90%", backgroundColor: "#fff", borderRadius: 10, padding: 20 }}>
              <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Agregar Ingrediente</Text>
              <InputText onChangeText={(value:string)=>setIngrediente({ ...ingrediente, nombre: value })} value={ingrediente.nombre} label="Nombre del ingrediente" placeholder="Nombre del ingrediente" />
              <InputText onChangeText={(value:string)=>setIngrediente({ ...ingrediente, cantidad: value })} value={ingrediente.cantidad} label="Cantidad" placeholder="Cantidad" keyboardType="numeric"/>
              <Button title="Agregar" onPress={()=>handleSaveIngredient()} style={{ marginTop: 20 }} />
            </View>
          </View>
          </Modal>

        
    </View>
  );
}
