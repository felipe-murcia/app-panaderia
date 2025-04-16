import { Button, Text, View } from "react-native";
import ButtonMenu from "../components/BotonMenu/ButtonMenu";
import { useRouter } from 'expo-router';

export default function Main() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
      }}
    >
      <Text style={{fontSize:28, fontFamily: 'PoppinsSemiBold'}}>Hola, usuario.</Text>
      <Text style={{fontSize:14, fontFamily: 'PoppinsLight' }}>Bienvenido a la app de panaderia.</Text>

      <ButtonMenu title="Ordenes" icon="ordenes" onPress={()=>console.log('prueba')}/>
      <ButtonMenu title="Recetas" icon="recetas" onPress={()=>router.navigate('/Recetas')}/>
      <ButtonMenu title="Inventario" icon="productos" onPress={()=>{}}/>
      <ButtonMenu title="Movimientos" icon="movimientos" onPress={()=>{}}/>
    </View>
  );
}
