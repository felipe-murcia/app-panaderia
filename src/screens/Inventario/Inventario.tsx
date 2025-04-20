import HeaderModule from "@/src/components/HeaderModule/HeaderModule";
import { Button, Text, View } from "react-native";
import { useRouter } from 'expo-router';
import { useState } from "react";
import ItemProducto from "@/src/components/ItemProducto/ItemReceta";

export default function InventarioScreen() {
  
  const [ data, setData ] = useState([]);
  
  const router = useRouter();


  const handlePress = () => {
    console.log('Button pressed!');
    router.navigate('/Inventario/form')
  }
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
      }}
    >

      <HeaderModule title="Inventario" icon="plus" onPress={()=>handlePress()}/>
      <View>

      <ItemProducto onPress={handlePress} />
        


      </View>
    </View>
  );
}
