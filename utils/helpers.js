
import { Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


export const backAction = () => {
      Alert.alert("Salir", "¿Esta seguro que desea salir de la aplicación?", [
        {
          text: "Cancelar",
          onPress: () => null,
          style: "cancel"
        },
        { text: "Salir", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
   
}

export const obtenerToken =  async () => {
  const token = await AsyncStorage.getItem("token");
  return token;
}

