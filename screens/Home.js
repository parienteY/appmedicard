import { useEffect, useState } from "react";
import { BackHandler, SafeAreaView, Text, View, StyleSheet, Image, ScrollView, Alert, TouchableHighlight,  } from "react-native";
import {obtenerUsuario} from '../utils/helpers'
import Carousel from 'react-native-snap-carousel';

export default function Home({navigation}) {
  const [usuario, setUsuario] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselItems = [
    {
      id: "1",
      image: require("../assets/img/1.jpg")
    },
    {
      id: "2",
      image: require("../assets/img/2.jpg")
    },
    {
      id: "3",
      image: require("../assets/img/3.jpg")
    },
    {
      id: "4",
      image: require("../assets/img/4.jpg")
    },
    {
      id: "5",
      image: require("../assets/img/5.jpg")
    },
    {
      id: "6",
      image: require("../assets/img/6.jpg")
    }
  ];

    useEffect(() => {
      const usuario = async() => {
        const res = await obtenerUsuario();
        setUsuario(res)
      }
      usuario();
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
      
        
      }, []);

     const renderItem = ({item, index}) => {
        return (
            <View>
                <Image 
                resizeMode="contain"
                style={{  
                  height: 190,
                  width: 370               
                }} source={item.image}></Image>
            </View>
        );
    }

    return(
        <SafeAreaView style={{
          justifyContent:"center",
          alignItems:'center',
          backgroundColor: "white", 
        }}>
          <ScrollView>
        <View
      style={{
        flexDirection: "row",

        marginStart: 5,
        marginTop: 40,
    
      }}>
      <View 
      style={{ 
        backgroundColor: "white"}} >
          <Text style={{
                    color:'black',
                    fontSize: 17,
                    marginTop: 20,
                  }}>👋 Hola!</Text>

                  <Text style={{
                    color:'black',
                    fontWeight:'bold',
                    fontSize: 20,
                    marginTop: 1,
                    marginStart: 25,
                  }}>{usuario.nombres}</Text>
        </View>
        </View>
    

        <Text style={{
                    color:'black',
                    fontWeight:'bold',
                    fontSize: 25,
                    marginBottom: -20,
                    marginTop: 20,
                    marginStart: 30
                  }}>Servicios</Text>


    <View
      style={{
        flexDirection: "row",
        height: 250,
        padding: 30,
      }}>
        
      <TouchableHighlight
      underlayColor="#43BAC1"
      style={{
            justifyContent:"center",
            alignItems:'center',
            borderRadius: 20,
            borderColor:'#d7deea',
            backgroundColor: '#f3f3f5',
            borderWidth: 1,
            flex: 0.5, 
            marginEnd: 30, 
      }} onPress={() => navigation.push("Citas")}>
        
      <View 
      style={{ 
       }} >
         <Text
        style={{
                    color:'#4A545E',
                    fontWeight:'bold',
                    fontSize: 15,
                    marginTop: 0,
                    marginBottom:20
                  }}>Citas Medicas</Text>
          <View style={{ 
            justifyContent:"center",
            alignItems:'center',
            borderRadius: 20,
            borderColor:'#becada',
            borderWidth: 1,
            //backgroundColor: "#43BAC1",
            width: 110,
            padding: 30,
            flex: 0.8, }} >
          
          <Text style={{
                    fontSize: 35,
                  }}>🩺</Text>

        </View>
        
        </View>
      </TouchableHighlight>

        <TouchableHighlight
      underlayColor="#43BAC1"
      style={{
            justifyContent:"center",
            alignItems:'center',
            borderRadius: 20,
            borderColor:'#d7deea',
            backgroundColor: '#f3f3f5',
            borderWidth: 1,
            flex: 0.5, 
      }} onPress={() => navigation.push("Emergencias")}>
        <View>
          <View style={{ 
            justifyContent:"center",
            alignItems:'center',
            borderRadius: 20,
            borderColor:'#becada',
            borderWidth: 1,
            //backgroundColor: "#43BAC1",
            width: 110,
            padding: 30,
            flex: 0.8, }} >
          
          <Text style={{
                    fontSize: 35,
                  }}>🚨</Text>
        </View>
        <Text style={{
                    color:'#4A545E',
                    fontWeight:'bold',
                    fontSize: 15,
                    marginTop: 15,
                  }}>Emergencias</Text>
                  </View>

        </TouchableHighlight>
    </View>

    <View
      style={{
        flexDirection: "row",
        height: 250,
        padding: 30,
        marginTop: -30,
      }}>
          
          <TouchableHighlight
      underlayColor="#43BAC1"
      style={{
            justifyContent:"center",
            alignItems:'center',
            borderRadius: 20,
            borderColor:'#d7deea',
            backgroundColor: '#f3f3f5',
            borderWidth: 1,
            marginEnd: 30, 
            flex: 0.5, 
      }} onPress={() => navigation.push("LaboratorioClinico")}>
        <View>
          <View style={{ 
            justifyContent:"center",
            alignItems:'center',
            borderRadius: 20,
            borderColor:'#becada',
            borderWidth: 1,
            //backgroundColor: "#43BAC1",
            width: 110,
            padding: 30,
            flex: 0.8, }} >
          
          <Text style={{
                    fontSize: 35,
                  }}>💊</Text>
        </View>
        <Text style={{
                    color:'#4A545E',
                    fontWeight:'bold',
                    fontSize: 15,
                    marginTop: 15,
                  }}>Emergencias</Text>
                  </View>

        </TouchableHighlight>

        <TouchableHighlight 
        underlayColor="#43BAC1"
        onPress={() => navigation.push("LaboratorioClinico")} style={{ 
        justifyContent:"center",
        alignItems:'center',
        borderRadius: 20,
        borderColor:'#d7deea',
            backgroundColor: '#f3f3f5',
            borderWidth: 1,
        flex: 0.5, }} >
          <View>
          <View   style={{ 
            justifyContent:"center",
            alignItems:'center',
            borderRadius: 20,
            borderColor:'#becada',
            borderWidth: 1,
            //backgroundColor: "#43BAC1",
            width: 110,
            padding: 30,
            flex: 0.8, }} >
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
                  </TouchableHighlight>
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
        marginBottom: 100,
      }}>
         
        { <Image source={require('../assets/img/3.jpg')}
            style = {{ 
              width: 367, 
              height: 187,
              borderRadius: 20,
              borderWidth: 1.5, }}
            ></Image> }
        </View>
          </ScrollView>
        </SafeAreaView>
    )
  }