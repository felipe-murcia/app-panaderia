import HeaderModule from "@/src/components/HeaderModule/HeaderModule";
import { Button, Text, View } from "react-native";
import { useRouter } from 'expo-router';

export default function RecetasScreen() {
  const router = useRouter();
  const handlePress = () => {
    console.log('Button pressed!');
    router.navigate('/Recetas/form')
  }
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
      }}
    >

      <HeaderModule title="Recetas" icon="plus" onPress={()=>handlePress()}/>
      <View>


      </View>
    </View>
  );
}
