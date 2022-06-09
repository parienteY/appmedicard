import React, {useState,useEffect} from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import {obtenerUsuario} from '../utils/helpers';


const  Profile= () => {
  const [usuario, setUsuario] = useState({});

    useEffect(() => {
      const usuario = async() => {
        const res = await obtenerUsuario();
        setUsuario(res)
      }
      usuario();
    }, [])
  return (
    <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}  
                  source={{uri: 'https://jogi-bear.de/wp-content/uploads/2020/02/LogoMakr_ich.png'}}/>
                <Text style={styles.name}>Nombre De Usuario:</Text>  
                <Text style={styles.name}>{usuario.nombres}</Text>
                <Text style={styles.name}>Correo:</Text> 
                <Text style={styles.userInfo}>{usuario.email}</Text>       
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.item}>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Dias Aviles</Text>
                <Text style={styles.info}>Con</Text>
                <Text style={styles.info}>Tarjeta Medicard:</Text>
                <Text style={styles.info}>120</Text>                
              </View>
            </View>     
          </View>
          <View>

          </View>
      </View>
  );
}
const styles = StyleSheet.create({
  header:{
    backgroundColor: "#43BAC1",
    flex:1,
    padding: 20
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#000000",
    fontWeight:'600',
    paddingBottom: 10
  },
  userInfo:{
    fontSize:16,
    color:"#000000",
    fontWeight:'600',
  },
  container: {
    flex: 1
  },
  body:{
    backgroundColor: "#FFFFFF",
    flex:1,
    alignItems:'center',
  },
  item:{
    flexDirection : 'row',
  },
  infoContent:{
    flex:1,
    paddingLeft:5,
    borderRadius: 20,
    backgroundColor: "#E62D28",
    margin: 20,
  },
  info:{
    fontSize:25,
    marginTop:20,
    color: "#000000",
    textAlign: "center"
  }
});

export default Profile;