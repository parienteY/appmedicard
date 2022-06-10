import { useEffect, useState } from "react";
import {obtenerUsuario} from '../utils/helpers'
import Carousel from 'react-native-snap-carousel';
import {
  BackHandler,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
  Linking,
  TouchableHighlight,
} from "react-native";
import { color } from "react-native-elements/dist/helpers";
import { Button } from "react-native-paper";

export default function Home(props,{ navigation }) {
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
    const usuario = async () => {
      const res = await obtenerUsuario();
      setUsuario(res);
    };
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
          backgroundColor: "#f2f4f8", 
        }}>
          <ScrollView>
        <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <View
          style={{
            flexDirection: "row",

        marginStart: 5,
        marginTop: 40,
    
      }}>
      <View 
      style={{ 
        backgroundColor: "#f2f4f8"}} >
          <Text style={{
                    color:'#2c2f33',
                    fontWeight:'bold',
                    fontSize: 30,
                    marginTop: 20,
                  }}>👋 Hola!</Text>
                  
                  <Image source={require('../assets/img/MEDICARD.png')}
                          style = {{ 
                          width: 85, 
                          height: 85,
                          marginStart: 300,
                          marginTop: -50,}}>
                          </Image>

                  <Text style={{
                    color:'#101213',
                    fontWeight:'bold',
                    fontSize: 20,
                    marginTop: 1,
                    marginStart: 40,
                    marginTop: -30,
                  }}>{usuario.nombres}</Text>
        </View>
        </View>
    </View>

        <Text style={{
                    color:'#57636c',
                    fontWeight:'bold',
                    fontSize: 30,
                    marginBottom: -20,
                    marginTop: 20,
                    marginStart: 30
                  }}>Servicios</Text>

        <Text
          style={{
            color: "black",
            fontWeight: "bold",
            fontSize: 18,
            marginBottom: -20,
            marginTop: 20,
          }}
        >
        </Text>

    <View
      style={{
        flexDirection: "row",
        height: 250,
        padding: 30,
      }}>
        
      <TouchableHighlight
      underlayColor="#dc3545"
      style={{
            justifyContent:"center",
            alignItems:'center',
            borderRadius: 20,
            borderColor:'#dddfe2',
            backgroundColor: '#ffffff',
            borderWidth: 1.5,
            flex: 0.5, 
            marginEnd: 30, 
      }} onPress={() => {props.navigation.navigate("Instituciones", { id: 6 })
      }}>
        
      <View 
      style={{ 
       }} >
          <View style={{ 
            justifyContent:"center",
            alignItems:'center',
            borderRadius: 100,
            //backgroundColor: "#f1f4f7",
            width: 110,
            padding: 30,
            flex: 0.8, }} >
          
          <Image source={require('../assets/img/loslirios.jpeg')}
              style={{
                width: 100,
                height: 100,
                borderRadius: 20,
                borderWidth: 1.5,
              }}
            ></Image>

        </View>
        <Text
        style={{
                    color:'#57636c',
                    fontWeight:'bold',
                    fontSize: 15,
                    marginTop: 15,
                  }}>Los Lirioss</Text>
        </View>
      </TouchableHighlight>

        <TouchableHighlight
      underlayColor="#dc3545"
      style={{
            justifyContent:"center",
            alignItems:'center',
            borderRadius: 20,
            borderColor:'#dddfe2',
            backgroundColor: '#ffffff',
            borderWidth: 1.5,
            flex: 0.5, 
      }}  onPress={() => {props.navigation.navigate("Instituciones", { id: 4 })
      }}>
        <View>
          <View style={{ 
            justifyContent:"center",
            alignItems:'center',
            borderRadius: 100,
            //backgroundColor: "#f1f4f7",
            width: 110,
            padding: 30,
            flex: 0.8, }} >
          
          <Image source={require('../assets/img/Coldent.jpeg')}
              style={{
                width: 100,
                height: 100,
                borderRadius: 20,
                borderWidth: 1.5,
              }}
            ></Image>
        </View>
        <Text style={{
                    color:'#57636c',
                    fontWeight:'bold',
                    fontSize: 15,
                    marginTop: 15,
                  }}>Coldent</Text>
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
      underlayColor="#dc3545"
      style={{
            justifyContent:"center",
            alignItems:'center',
            borderRadius: 20,
            borderColor:'#dddfe2',
            backgroundColor: '#ffffff',
            borderWidth: 1.5,
            marginEnd: 30, 
            flex: 0.5, 
      }} onPress={() => {props.navigation.navigate("Instituciones", { id: 1 })
    }}>
        <View>
          <View style={{ 
            justifyContent:"center",
            alignItems:'center',
            borderRadius: 100,
            //backgroundColor: "#f1f4f7",
            width: 110,
            padding: 30,
            flex: 0.8, }} >
          
          <Image source={require('../assets/img/Buscamed.jpg')}
              style={{
                width: 100,
                height: 100,
                borderRadius: 20,
                borderWidth: 1.5,
              }}
            ></Image>
        </View>
        <Text style={{
                    color:'#57636c',
                    fontWeight:'bold',
                    fontSize: 15,
                    marginTop: 15,
                  }}>BuscaMed</Text>
                  </View>

        </TouchableHighlight>

        <TouchableHighlight 
        underlayColor="#dc3545"
        onPress={() => {props.navigation.navigate("Instituciones", { id: 5 })
      }} style={{ 
        justifyContent:"center",
        alignItems:'center',
        borderRadius: 20,
        borderColor:'#dddfe2',
        backgroundColor: '#ffffff',
        borderWidth: 1.5,
        flex: 0.5, }} >
          <View>
          <View   style={{ 
            justifyContent:"center",
            alignItems:'center',
            borderRadius: 100,
            //backgroundColor: "#f1f4f7",
            width: 110,
            padding: 30,
            flex: 0.8, }} >
              <Image source={require('../assets/img/Marbella.jpg')}
              style={{
                width: 100,
                height: 100,
                borderRadius: 20,
                borderWidth: 1.5,
              }}
            ></Image>
          
        </View>
        <Text style={{
                    color:'#57636c',
                    fontWeight:'bold',
                    fontSize: 15,
                    marginTop: 10,
                  }}>Marbella</Text>
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
      underlayColor="#dc3545"
      style={{
            justifyContent:"center",
            alignItems:'center',
            borderRadius: 20,
            borderColor:'#dddfe2',
            backgroundColor: '#ffffff',
            borderWidth: 1.5,
            marginEnd: 30, 
            flex: 0.5, 
      }} onPress={() => {props.navigation.navigate("Instituciones", { id: 3 })
    }}>
        <View>
          <View style={{ 
            justifyContent:"center",
            alignItems:'center',
            borderRadius: 100,
            //backgroundColor: "#f1f4f7",
            width: 110,
            padding: 30,
            flex: 0.8, }} >
          
          <Image source={require('../assets/img/Unimagen.jpg')}
              style={{
                width: 100,
                height: 100,
                borderRadius: 20,
                borderWidth: 1.5,
              }}
            ></Image>
        </View>
        <Text style={{
                    color:'#57636c',
                    fontWeight:'bold',
                    fontSize: 15,
                    marginTop: 15,
                  }}>Unimagen</Text>
                  </View>

        </TouchableHighlight>

        <TouchableHighlight 
        underlayColor="#dc3545"
        onPress={() => {props.navigation.navigate("Instituciones", { id: 2 })
      }} style={{ 
        justifyContent:"center",
        alignItems:'center',
        borderRadius: 20,
        borderColor:'#dddfe2',
        backgroundColor: '#ffffff',
        borderWidth: 1.5,
        flex: 0.5, }} >
          <View>
          <View   style={{ 
            justifyContent:"center",
            alignItems:'center',
            borderRadius: 100,
            //backgroundColor: "#f1f4f7",
            width: 110,
            padding: 30,
            flex: 0.8, }} >
              <Image source={require('../assets/img/reenfermeria.jpeg')}
              style={{
                width: 100,
                height: 100,
                borderRadius: 20,
                borderWidth: 1.5,
              }}
            ></Image>
          
        </View>
        <Text style={{
                    color:'#57636c',
                    fontWeight:'bold',
                    fontSize: 15,
                    marginTop: 10,
                  }}>Red de enfermeria</Text>
                  </View>
                  </TouchableHighlight>
    </View>

    <View
      style={{
        //justifyContent:"center",
        alignItems:'center',
        borderRadius: 20,
        borderColor:'#d7deea',
        //backgroundColor:'rgba(67,186,193,100)',
        backgroundColor: 'white',
        borderWidth: 1.5,
        height: 250,
        width: 370,
        marginBottom: 100,
        marginStart:10
      }}>
         <Text style={{
                    color:'#57636c',
                    fontWeight:'bold',
                    fontSize: 25,
                    marginTop: 10,
                  }}>La tarjeta MEDICARD</Text>
                  <Text style={{
                    color:'#57636c',
                    fontWeight:'bold',
                    fontSize: 25,
                    marginTop: 0,
                  }}>te ofrece:</Text>
                  <Text style={{
                    color:'#57636c',
                    fontWeight:'bold',
                    fontSize: 15,
                    marginTop: 15,
                    
                  }}>✓ Hasta 70% de descuento en</Text>
                  <Text style={{
                    color:'#57636c',
                    fontWeight:'bold',
                    fontSize: 15,
                    marginTop: 0,
                  }}>consultas médicas, laboratorios, </Text>
                  <Text style={{
                    color:'#57636c',
                    fontWeight:'bold',
                    fontSize: 15,
                    marginTop: 0,
                  }}>diagnóstico por imagen y emergencia</Text>
                  <Text style={{
                    color:'#57636c',
                    fontWeight:'bold',
                    fontSize: 15,
                    marginTop: 15,
                  }}>✓ Hasta 30% de descuento en</Text>
                  <Text style={{
                    color:'#57636c',
                    fontWeight:'bold',
                    fontSize: 15,
                    marginTop: 0,
                  }}>procedimientos quirúrgicos e internación.</Text>
                  <Text style={{
                    color:'#57636c',
                    fontWeight:'bold',
                    fontSize: 15,
                    marginTop: 30,
                  }}>Conoce las áreas específicas acá: </Text>
                  <View>
                  <TouchableHighlight 
                  underlayColor="#43BAC1"
                  style={{ 
                  justifyContent:"center",
                  alignItems:'center',
                  borderRadius: 20,
                  borderColor:'#dddfe2',
                  backgroundColor: '#dc3545',
                  marginTop: 25,
                  width: 100,
                  height: 80,
                  borderWidth: 1.5,
                  flex: 0.5, }}>
                    <Text style={{
                    color:'white',
                    fontWeight:'bold',
                    fontSize: 15,
                  }}>VER MAS</Text>
                  </TouchableHighlight>
                  </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
