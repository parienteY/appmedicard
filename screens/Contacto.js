import React, {useState,useEffect} from 'react';
import { Text, View, Image, StyleSheet, ScrollView, Linking } from 'react-native';


const  Contacto= () => {
  return (
    <View>
          <ScrollView>
        <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#E62D28",
      }}
    >
        <View
          style={{
        flexDirection: "row",
        marginStart: -75,
        marginTop: 40,
      }}>
      <View>
          <Text style={{
                    color:'white',
                    fontWeight:'bold',
                    fontSize: 30,
                    padding:35,
                    marginTop: 10,
                  }}>INFORMACION DE CONTACTO</Text>
        </View>
        </View>
    </View>
    
<View
style={{
    justifyContent: "center",
    backgroundColor: '#eeeff0',
    padding:25
    }}>
        <Text
            style={{
            color: "#57636c",
            paddingStart:35,
            fontSize: 15,
            textAlign:"center",
            marginBottom: -20,
            marginTop: 5,
            marginStart: -60,
            paddingBottom:10
          }}>* Para realizar la llamada haga click en el número
        </Text>
    <Text
          style={{
            color: "#43BAC1",
            fontWeight: "bold",
            fontSize: 30,
            marginTop: 20,
          }}>
            Emergencias: 
        </Text>
        <Text onPress={()=>{Linking.openURL('tel:+591-4-4333311');}}
          style={{
            color: "#7b8d9e",
            fontWeight: "bold",
            fontSize: 18,
            marginTop: 30,
            textAlign:"center"
          }}>
           ✆ 4333311
        </Text>
        <Text onPress={()=>{Linking.openURL('tel:+59178310081');}}
          style={{
            color: "#7b8d9e",
            fontWeight: "bold",
            fontSize: 18,
            marginBottom: -20,
            marginTop: 20,
            textAlign:"center"
          }}>
            ✆ 78310081
        </Text>
        <Text
          style={{
            color: "#43BAC1",
            fontWeight: "bold",
            fontSize: 30,
            marginTop: 40,
          }}>
            Consultas médicas: 
        </Text>
        <Text
        onPress={()=>{Linking.openURL('tel:+591-4-4333366');}}
          style={{
            color: "#7b8d9e",
            fontWeight: "bold",
            fontSize: 18,
            marginTop: 30,
            textAlign:"center"
          }}>
            ✆ 4333366
        </Text>
        <Text
        onPress={()=>{Linking.openURL('tel:+591-78300180');}}
          style={{
            color: "#7b8d9e",
            fontWeight: "bold",
            fontSize: 18,
            marginTop: 20,
            textAlign:"center"
          }}>
            ✆ 78300180
        </Text>
        <Text
          style={{
            color: "#43BAC1",
            fontWeight: "bold",
            fontSize: 30,
            marginBottom: -20,
            marginTop: 20,
          }}>Informaciones:
        </Text>
        <Text
          onPress={()=>{Linking.openURL('tel:+591-4-4333344');}}
          style={{
            color: "#7b8d9e",
            fontWeight: "bold",
            fontSize: 18,
            marginTop: 30,
            textAlign:"center"
          }}>
             ✆ 4333344
        </Text>
        <Text
          onPress={()=>{Linking.openURL('tel:+591-77484800');}}
          style={{
            color: "#7b8d9e",
            fontWeight: "bold",
            fontSize: 18,
            marginTop: 20,
            textAlign:"center"
          }}>
             ✆ 77484800
        </Text>
        <Text
          style={{
            color: "#43BAC1",
            fontWeight: "bold",
            fontSize: 30,
            marginBottom: -20,
            marginTop: 20,
          }}>
              Correo:        
              </Text>
              <Text
            onPress={()=>{Linking.openURL('mailto:info@medicard.com.bo');}}
            style={{
            color: "#7b8d9e",
            fontWeight: "bold",
            fontSize: 18,
            marginTop: 30,
            marginBottom: 30,
            textAlign:"center"
          }}>
             ✉️ info@medicard.com.bo
              </Text>
              </View>
      </ScrollView>
    </View>
  );
}

export default Contacto;