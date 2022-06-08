import { useEffect } from "react";
import { BackHandler, SafeAreaView, Text, View, StyleSheet, Image,  } from "react-native";
import { color } from "react-native-elements/dist/helpers";


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
        <SafeAreaView style={{
          justifyContent:"center",
          alignItems:'center',
          backgroundColor: "white", 
        }}>

        <View
      style={{
        flexDirection: "row",
        height : 70,
        width : 730,
        marginStart: 365,
        marginTop: 100,
    
      }}>
      <View 
      style={{ 
        backgroundColor: "white", 
        flex: 0.5,}} >
          <Text style={{
                    color:'black',
                    fontSize: 20,
                  }}>👋 Hola!</Text>
                  <Text style={{
                    color:'black',
                    fontWeight:'bold',
                    fontSize: 25,
                    marginTop: 10,
                    marginStart: 25,
                  }}>Nombre de Usuario</Text>
        </View>
        </View>
    

        <Text style={{
                    color:'black',
                    fontWeight:'bold',
                    fontSize: 18,
                    marginBottom: -20,
                    marginTop: 20,
                  }}>Servicios</Text>


    <View
      style={{
        flexDirection: "row",
        height: 250,
        padding: 30,
      }}>
      <View style={{ 
        justifyContent:"center",
        alignItems:'center',
        borderRadius: 20,
        borderColor:'#d7deea',
        borderWidth: 1,
        flex: 0.5, 
        marginEnd: 30, }} >
          <View style={{ 
            justifyContent:"center",
            alignItems:'center',
            borderRadius: 20,
            borderColor:'#becada',
            borderWidth: 1,
            //backgroundColor: "#43BAC1",
            width: 135,
            padding: 30,
            flex: 0.5, }} >
          
          <Text style={{
                    fontSize: 35,
                  }}>🩺</Text>

        </View>
        <Text style={{
                    color:'#4A545E',
                    fontWeight:'bold',
                    fontSize: 15,
                    marginTop: 10,
                  }}>Citas Medicas</Text>
        </View>

        <View style={{ 
        justifyContent:"center",
        alignItems:'center',
        borderRadius: 20,
        borderColor:'#d7deea',
        borderWidth: 1,
        flex: 0.5, }} >
          <View style={{ 
            justifyContent:"center",
            alignItems:'center',
            borderRadius: 20,
            borderColor:'#becada',
            borderWidth: 1,
            //backgroundColor: "#43BAC1",
            width: 135,
            padding: 30,
            flex: 0.5, }} >
          
          <Text style={{
                    fontSize: 35,
                  }}>🚨</Text>
        </View>
        <Text style={{
                    color:'#4A545E',
                    fontWeight:'bold',
                    fontSize: 15,
                    marginTop: 10,
                  }}>Emergencias</Text>
        </View>
    </View>

    <View
      style={{
        flexDirection: "row",
        height: 250,
        padding: 30,
        marginTop: -30,
      }}>
      <View style={{ 
        justifyContent:"center",
        alignItems:'center',
        borderRadius: 20,
        borderColor:'#d7deea',
        borderWidth: 1,
        flex: 0.5, 
        marginEnd: 30, }} >
          <View style={{ 
            justifyContent:"center",
            alignItems:'center',
            borderRadius: 20,
            borderColor:'#becada',
            borderWidth: 1,
            //backgroundColor: "#43BAC1",
            width: 135,
            padding: 30,
            flex: 0.5, }} >
              <Text style={{
                    fontSize: 35,
                  }}>💊</Text>
          
        </View>
        <Text style={{
                    color:'#4A545E',
                    fontWeight:'bold',
                    fontSize: 15,
                    marginTop: 10,
                  }}>Laboratorio Clinico</Text>
        </View>

        <View style={{ 
        justifyContent:"center",
        alignItems:'center',
        borderRadius: 20,
        borderColor:'#d7deea',
        borderWidth: 1,
        flex: 0.5, }} >
          <View style={{ 
            justifyContent:"center",
            alignItems:'center',
            borderRadius: 20,
            borderColor:'#becada',
            borderWidth: 1,
            //backgroundColor: "#43BAC1",
            width: 135,
            padding: 30,
            flex: 0.5, }} >
              <Text style={{
                    fontSize: 35,
                  }}>💉</Text>
          
        </View>
        <Text style={{
                    color:'#4A545E',
                    fontWeight:'bold',
                    fontSize: 15,
                    marginTop: 10,
                  }}>Operaciones</Text>
        </View>
    </View>

    <View
      style={{
        justifyContent:"center",
        alignItems:'center',
        borderRadius: 20,
        borderColor:'#d7deea',
        borderWidth: 1.5,
        height: 190,
        width: 370,
        marginBottom: 20,
      }}>
        <Image source={require('../assets/img/1.jpg')}
            style = {{ 
              width: 367, 
              height: 187,
              borderRadius: 20,
              borderWidth: 1.5, }}
            ></Image>
        </View>
        </SafeAreaView>
    )
  }