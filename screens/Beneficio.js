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
                    marginTop: 30,
                  }}>INFORMACION DE CONTACTO</Text>
        </View>
        </View>
    </View>

    <Text
          style={{
            color: "#57636c",
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
            marginTop: 20,
          }}>
            4333311
        </Text>
        <Text onPress={()=>{Linking.openURL('tel:+59178310081');}}
          style={{
            color: "#7b8d9e",
            fontWeight: "bold",
            fontSize: 18,
            marginBottom: -20,
            marginTop: 20,
          }}>
            78310081
        </Text>
        <Text
          style={{
            color: "#57636c",
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
            marginTop: 20,
          }}>
            4333366
        </Text>
        <Text
        onPress={()=>{Linking.openURL('tel:+591-78300180');}}
          style={{
            color: "#7b8d9e",
            fontWeight: "bold",
            fontSize: 18,
            marginTop: 20,
          }}>
            78300180
        </Text>
        <Text
          style={{
            color: "#57636c",
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
            marginTop: 20,
          }}>
             4333344
        </Text>
        <Text
          onPress={()=>{Linking.openURL('tel:+591-77484800');}}
          style={{
            color: "#7b8d9e",
            fontWeight: "bold",
            fontSize: 18,
            marginTop: 20,
          }}>
             77484800
        </Text>
        <Text
          style={{
            color: "#57636c",
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
            marginTop: 20,
          }}>
              info@medicard.com.bo</Text>
      </ScrollView>
    </View>
  );
}

export default Contacto;