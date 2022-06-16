import { useEffect, useState } from "react";
import {obtenerUsuario} from '../utils/helpers'
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

export default function Home( {navigation }) {
  const [usuario, setUsuario] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);
  const beneficio = `
Hasta 70% de descuento en la atención de consulta médica privada y con tratamiento ambulatorio en todas las especialidades médicas clínicas.
    -Cardiología
    -Medicina Familiar
    -Dermatología
    -Medicina Interna
    -Endocrinología
    -Neumología
    -Gastroenterología
    -Pediatría
    -Geriatría
    -Reumatología
    -Hematología
    -Oftalmología
    -Ginecología
    -Odontología
    -Nefrología 
  
Hasta 30% de descuento en la internación hospitalaria médica y que necesiten cirugías:
    -Neurocirugía
    -Cirugía Cardiovascular
    -Neuropediatría
    -Cirugía General
    -Oftalmología
    -Ginecología
    -Cirugía Pediátrica
    -Otorrinolaringología
    -Cirugía Plástica
    -Traumatología
    -Cirugía Torácica
    -Urología 

Hasta 70 % de descuento en las emergencias médicas que sean atendidas por nuestro personal de Ambulancia, Enfermería y Medicina General las 24 horas del día, los 365 días del año:

    -Curaciones
    -Inyectables
    -Sueros
    -Transporte de Ambulancia
    -Médico General 

Hasta 70 % de descuento en las siguientes pruebas y/o exámenes:

    -Laboratorios
    -Radiografías
    -Ecografías
    -Endoscopías
    -Audiometrías
    -Electrocardiogramas
  `;

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
          backgroundColor: '#eeeff0', 
          padding: -5,
        }}>
          <ScrollView>
        <View
      style={{
        //justifyContent: "center",
        //alignItems: "center",
      }}>
          <View
          style={{
            padding: 60,
            paddingBottom: -50,
        backgroundColor:'#43bac1'
      }}>
    <View
        style={{
        flexDirection: "column",
        marginStart: -60,
        marginTop: 10,
        marginBottom: 10,

        }}>
          <Text style={{
                color:'white',
                fontWeight:'bold',
                fontSize: 30,
                marginTop: 0,}}>
                  Hola!
                  </Text>
                  <Text style={{
                    color:'white',
                    fontWeight:'bold',
                    fontSize: 20,
                    marginTop: -5,
                    marginStart: 40,
                  }}>{usuario.nombres}</Text>
        </View>
        </View>
    </View>
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Text style={{
                    color:'#6a6f71',
                    fontWeight:'bold',
                    fontSize: 30,
                    marginBottom: 10,
                    marginTop: 20,
                  }}>CLINICAS</Text>
        </View>
        <View
        style={{
          //padding: -55,
        }}>
    <View
      style={{
        flexDirection: "row",
        height: 250,
        padding: 5,
      }}>
        
      <TouchableHighlight
      underlayColor="#dc3545"
      style={{
            justifyContent:"center",
            alignItems:'center',
            //borderRadius: 20,
            borderColor:'#dddfe2',
            backgroundColor: '#ffffff',
            //borderWidth: 1.5,
            flex: 0.5, 
            marginEnd: 10, 
      }} onPress={() => {navigation.navigate("Instituciones", { id: 6 })
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
                    color:'#9b9b9b',
                    fontWeight:'bold',
                    fontSize: 15,
                    marginTop: 15,
                  }}>Los Lirios</Text>
        </View>
      </TouchableHighlight>

        <TouchableHighlight
      underlayColor="#dc3545"
      style={{
            justifyContent:"center",
            alignItems:'center',
            //borderRadius: 20,
            borderColor:'#dddfe2',
            backgroundColor: '#ffffff',
            //borderWidth: 1.5,
            flex: 0.5, 
      }}  onPress={() => {navigation.navigate("Instituciones", { id: 4 })
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
                    color:'#9b9b9b',
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
        padding: 5,
      }}>
          
          <TouchableHighlight
      underlayColor="#dc3545"
      style={{
            justifyContent:"center",
            alignItems:'center',
            //borderRadius: 20,
            borderColor:'#dddfe2',
            backgroundColor: '#ffffff',
            //borderWidth: 1.5,
            marginEnd: 10, 
            flex: 0.5, 
      }} onPress={() => {navigation.navigate("Instituciones", { id: 1 })
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
                    color:'#9b9b9b',
                    fontWeight:'bold',
                    fontSize: 15,
                    marginTop: 15,
                  }}>BuscaMed</Text>
                  </View>

        </TouchableHighlight>

        <TouchableHighlight 
        underlayColor="#dc3545"
        onPress={() => {navigation.navigate("Instituciones", { id: 5 })
      }} style={{ 
        justifyContent:"center",
        alignItems:'center',
        //borderRadius: 20,
        borderColor:'#dddfe2',
        backgroundColor: '#ffffff',
        //borderWidth: 1.5,
        flex: 0.5, }} >
          <View>
          <View style={{ 
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
                    color:'#9b9b9b',
                    fontWeight:'bold',
                    fontSize: 15,
                    marginTop: 15,
                  }}>Marbella</Text>
                  </View>
                  </TouchableHighlight>
    </View>
    <View
      style={{
        flexDirection: "row",
        height: 250,
        padding: 5,
      }}>
          
          <TouchableHighlight
      underlayColor="#dc3545"
      style={{
            justifyContent:"center",
            alignItems:'center',
            //borderRadius: 20,
            borderColor:'#dddfe2',
            backgroundColor: '#ffffff',
            //borderWidth: 1.5,
            marginEnd: 10, 
            flex: 0.5, 
      }} onPress={() => {navigation.navigate("Instituciones", { id: 3 })
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
                    color:'#9b9b9b',
                    fontWeight:'bold',
                    fontSize: 15,
                    marginTop: 15,
                  }}>Unimagen</Text>
                  </View>

        </TouchableHighlight>

        <TouchableHighlight 
        underlayColor="#dc3545"
        onPress={() => {navigation.navigate("Instituciones", { id: 2 })
      }} style={{ 
        justifyContent:"center",
        alignItems:'center',
        //borderRadius: 20,
        borderColor:'#dddfe2',
        backgroundColor: '#ffffff',
        //borderWidth: 1.5,
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
                    color:'#9b9b9b',
                    fontWeight:'bold',
                    fontSize: 15,
                    marginTop: 10,
                  }}>Red de enfermeria</Text>
                  </View>
                  </TouchableHighlight>
    </View>
    <View
      style={{
        flexDirection: "row",
        height: 250,
        padding: 5,
      }}>
          
          <TouchableHighlight 
        underlayColor="#dc3545"
        onPress={() => {navigation.navigate("Instituciones", { id: 7 })
      }}
      style={{
            justifyContent:"center",
            alignItems:'center',
            //borderRadius: 20,
            borderColor:'#dddfe2',
            backgroundColor: '#ffffff',
            //borderWidth: 1.5,
            marginEnd: 10, 
            flex: 0.5,}}  >
          <View>
          <View   style={{ 
            justifyContent:"center",
            alignItems:'center',
            borderRadius: 100,
            //backgroundColor: "#f1f4f7",
            width: 110,
            padding: 30,
            flex: 0.8, }} >
              <Image source={require('../assets/img/CAO.jpg')}
              style={{
                width: 100,
                height: 100,
                borderRadius: 20,
                borderWidth: 1.5,
              }}
            ></Image>
          
        </View>
        <Text style={{
                    color:'#9b9b9b',
                    fontWeight:'bold',
                    fontSize: 15,
                    marginTop: 10,
                  }}>C.A.O - Unico</Text>
                  </View>
                  </TouchableHighlight>
    </View>
    </View>
    <View style={{
        //justifyContent:"center",
        //alignItems:'center',
        margin: 5,

      }}>
    <View
      style={{
        //justifyContent:"center",
        alignItems:'center',
        borderRadius: 10,
        backgroundColor: 'white',
        borderWidth: 4,
        borderColor:'#d7deea',
      }}>
         <Text style={{
                    color:'#57636c',
                    fontWeight:'bold',
                    fontSize: 25,
                  }}>La tarjeta MEDICARD</Text>
                  <Text style={{
                    color:'#57636c',
                    fontWeight:'bold',
                    fontSize: 25,
                  }}>te ofrece:</Text>
                  <Text style={{
                    color:'#57636c',
                    fontSize: 15,
                    marginTop: 20,
                  }}>✓ Hasta 70% de descuento en</Text>
                  <Text style={{
                    color:'#57636c',
                    fontSize: 15,
                  }}>consultas médicas, laboratorios, </Text>
                  <Text style={{
                    color:'#57636c',
                    fontSize: 15,
                  }}>diagnóstico por imagen y emergencia</Text>
                  <Text style={{
                    color:'#57636c',
                    fontSize: 15,
                  }}>✓ Hasta 30% de descuento en</Text>
                  <Text style={{
                    color:'#57636c',
                    fontSize: 15,
                  }}>procedimientos quirúrgicos e internación.</Text>
                  <Text style={{
                    color:'#57636c',
                    fontSize: 15,
                    fontWeight:'bold',
                    marginTop: 20,
                  }}>Conoce las áreas específicas acá: </Text>
                  
                  <TouchableHighlight 
                  //</View>onPress={() => {props.navigation.navigate("Beneficio", { id: 2 })}}
                  onPress={() => Alert.alert("BENEFICIOS",beneficio)}
                  underlayColor="#43BAC1"
                  style={{ 
                  justifyContent:"center",
                  alignItems:'center',
                  borderRadius: 20,
                  borderColor:'#dddfe2',
                  backgroundColor: '#dc3545',
                  marginTop: 5,
                  marginBottom: 5,
                  width: 100,
                  height: 40,
                  borderWidth: 1.5,
                  flex: 0.5, }}>
                    <Text style={{
                    color:'white',
                    //fontWeight:'bold',
                    fontSize: 15,
                  }}>VER MAS</Text>
                  </TouchableHighlight>
                  <View>

                  </View>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
