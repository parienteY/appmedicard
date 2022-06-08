import { Button, Text, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useContext } from "react";
import { AuthContext } from "../utils/context";

export default function Perfil(){
    const {signOut} = useContext(AuthContext);

    const cerrarSesion = async () => {
        console.log("hola mundo")
       await AsyncStorage.clear().then(res => {
        signOut();
       })
      }
    return (
        
        <View style={{
            color:'black',
            fontSize: 17,
            marginTop: 100,
          }}>
            <Text>Perfil</Text>
            <Button title='Cerrar Sesion' color="red" onPress={cerrarSesion}></Button>
        </View>
    )
}