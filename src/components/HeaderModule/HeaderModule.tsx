import { Button, Text, View } from "react-native";
import ButtonIcon from "../IconButton/ButtonIcon";

interface Props {
    title: string;
    onPress: () => void;
    icon: string;
}

export default function HeaderModule({ title, onPress, icon = 'plus'}: Props) {
  return (
    <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <ButtonIcon icon="right" onPress={() => console.log('prueba')}/>
                <Text style={{fontSize:24, fontFamily: 'PoppinsSemiBold'}}> {title}</Text> 
            </View>
            <ButtonIcon icon={icon} onPress={onPress}/>
        </View>
      <View>

      </View>
    </View>
  );
}
