import { colorPrimaryBase } from "@/constant/color";
import { IReceta } from "@/src/interfaces/Receta";
import React from "react";
import { Text, TouchableOpacity, View, Dimensions, Image } from "react-native";

const { width, height } = Dimensions.get("window");

interface Props {
    data?: IReceta;
    onPress?: () => void;
}

export default function ItemReceta({ data, onPress }: Props) {
   

  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#fafafa",
        padding: 8,
        borderRadius: 8,
        margin: 4,
        marginTop: 10,
        elevation:1,
        shadowOpacity:0.2,
        shadowRadius:10,
      }}
      onPress={onPress} >
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ backgroundColor:colorPrimaryBase, borderRadius:50, padding:10 }}>
                <Image source={require("../../../assets/images/icon/harina.png")} style={{ width: 32, height: 32, tintColor:'' }} />
            </View>
          <View style={{ width: 5 }} />
          <View>
            <Text style={{ fontFamily: 'PoppinsMedium', fontSize: 16}}>{data?.nombre} Receta ejemplo</Text>
            <Text style={{ fontFamily: 'PoppinsLight', fontSize: 12}}>{data?.nombre} Tiempo: 12m | Temperatura: 24°</Text>
          </View>
        </View>
        <Image
          source={require("../../../assets/images/icon/more.png")}
          style={{ width: 32, height: 32, tintColor:'' }} />
      </View>
    </TouchableOpacity>
  );
}
