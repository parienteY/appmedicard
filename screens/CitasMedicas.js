import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, TouchableHighlight } from 'react-native';



const CitasMedicas = (props, { navigation }) => {
  return (
    <ScrollView
      style={{
        backgroundColor: 'white',
      }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: 'center',
          backgroundColor: 'white',
          marginTop: 90,
        }}>
        <Text style={{
          color: 'black',
          fontWeight: 'bold',
          fontSize: 40,
          marginTop: 20,
        }}>Descuento de : 70%</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: 'center',
          marginStart: 5,
          marginTop: 40,

        }}>
        <View
          style={{
            backgroundColor: "white"
          }} >
          <Text style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 30,
            marginTop: 20,
          }}>Citas Medicas</Text>

        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginStart: 30,
          marginTop: 10,

        }}>
        <View
          style={{
            backgroundColor: "white"
          }} >
          <Text style={{
            color: '#E62D28',
            fontWeight: 'bold',
            fontSize: 25,
            marginTop: 20,
          }}>Clinicas</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          height: 250,
          padding: 20,
        }}>
        <TouchableHighlight underlayColor="#43BAC1" onPress={() => {
          props.navigation.navigate("Instituciones", { id: 4 })
        }} style={{
          justifyContent: "center",
          alignItems: 'center',
          borderRadius: 5,
          borderColor: '#d7deea',
          borderWidth: 1,
          flex: 0.5,
          marginEnd: 30,
        }} >
          <View style={{
            justifyContent: "center",
            alignItems: 'center',
            //backgroundColor: "#43BAC1",
            width: 135,
            padding: 40,
            flex: 0.5,
          }}>

            <Image source={require('../assets/img/Bio-search.jpg')}
              style={{
                width: 100,
                height: 100,
                borderRadius: 20,
                borderWidth: 1.5,
              }}
            ></Image>
            <Text style={{
              color: '#4A545E',
              fontWeight: 'bold',
              fontSize: 15,
              marginTop: 10,
            }}>Bio-Search</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight underlayColor="#43BAC1" onPress={() => {
          props.navigation.navigate("Instituciones", { id: 1 })
        }} style={{
          justifyContent: "center",
          alignItems: 'center',
          borderRadius: 5,
          borderColor: '#d7deea',
          borderWidth: 1,
          flex: 0.5,
        }} >
          <View style={{
            justifyContent: "center",
            alignItems: 'center',
            //backgroundColor: "#43BAC1",
            width: 135,
            padding: 30,
            flex: 0.5,
          }} >

            <Image source={require('../assets/img/Buscamed.jpg')}
              style={{
                width: 100,
                height: 100,
                borderRadius: 20,
                borderWidth: 1.5,
              }}
            ></Image>
          <Text style={{
            color: '#4A545E',
            fontWeight: 'bold',
            fontSize: 15,
            marginTop: 10,
          }}>Buscamed</Text>
          </View>
        </TouchableHighlight>
      </View>

      <View
        style={{
          flexDirection: "row",
          height: 250,
          padding: 30,
          marginTop: -30
        }}>
        <TouchableHighlight underlayColor="#43BAC1" onPress={() => {
          props.navigation.navigate("Instituciones", { id: 6 })
        }} style={{
          justifyContent: "center",
          alignItems: 'center',
          borderRadius: 5,
          borderColor: '#d7deea',
          borderWidth: 1,
          flex: 0.5,
          marginEnd: 30,
        }} >
          <View style={{
            justifyContent: "center",
            alignItems: 'center',
            //backgroundColor: "#43BAC1",
            width: 135,
            padding: 40,
            flex: 0.5,
          }}>

            <Image source={require('../assets/img/Lirios.jpg')}
              style={{
                width: 100,
                height: 100,
                borderRadius: 20,
                borderWidth: 1.5,
              }}
            ></Image>

          <Text style={{
            color: '#4A545E',
            fontWeight: 'bold',
            fontSize: 15,
            marginTop: 10,
          }}>Lirios</Text>
          </View>
        </TouchableHighlight>


        <TouchableHighlight underlayColor="#43BAC1" onPress={() => {
          props.navigation.navigate("Instituciones", { id: 5 })
        }} style={{
          justifyContent: "center",
          alignItems: 'center',
          borderRadius: 5,
          borderColor: '#d7deea',
          borderWidth: 1,
          flex: 0.5,
        }} >
          <View style={{
            justifyContent: "center",
            alignItems: 'center',
            //backgroundColor: "#43BAC1",
            width: 135,
            padding: 30,
            flex: 0.5,
          }} >

            <Image source={require('../assets/img/Marbella.jpg')}
              style={{
                width: 100,
                height: 100,
                borderRadius: 20,
                borderWidth: 1.5,
              }}
            ></Image>
          <Text style={{
            color: '#4A545E',
            fontWeight: 'bold',
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
          marginTop: -30
        }}>
        <TouchableHighlight underlayColor="#43BAC1" onPress={() => {
          props.navigation.navigate("Instituciones", { id: 3 })
        }}style={{
          justifyContent: "center",
          alignItems: 'center',
          borderRadius: 5,
          borderColor: '#d7deea',
          borderWidth: 1,
          flex: 0.5,
          marginEnd: 30,
        }} >
          <View style={{
            justifyContent: "center",
            alignItems: 'center',
            //backgroundColor: "#43BAC1",
            width: 135,
            padding: 40,
            flex: 0.5,
          }}>

            <Image source={require('../assets/img/Unimagen.jpg')}
              style={{
                width: 100,
                height: 100,
                borderRadius: 20,
                borderWidth: 1.5,
              }}
            ></Image>
          <Text style={{
            color: '#4A545E',
            fontWeight: 'bold',
            fontSize: 15,
            marginTop: 10,
          }}>Unimagen</Text>
          </View>
        </TouchableHighlight>



      </View>


    </ScrollView>
  );
}

export default CitasMedicas;