import { useEffect } from "react";
import { Alert, BackHandler, SafeAreaView, Text, View } from "react-native";

export default function Home({navigation}) {
    useEffect(() => {
  
        const backAction = () => {
          if(navigation.isFocused()){
            Alert.alert("Salir", "¿Esta seguro que desea salir de la aplicación?", [
              {
                text: "Cancelar",
                onPress: () => null,
                style: "cancel"
              },
              { text: "Salir", onPress: () => BackHandler.exitApp() }
            ]);
            return true;
          }else{
            return false;
          }
        };
      
      
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
    
      
        return () => backHandler.remove();
      
        
      }, [])
    return(
        <SafeAreaView>
        <View>
            <Text>Hola</Text>
        </View>
        </SafeAreaView>
    )
}