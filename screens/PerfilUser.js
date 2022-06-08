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
                  source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
                <Text style={styles.name}>{usuario.nombres}</Text>
                <Text style={styles.userInfo}>correo</Text>       
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.item}>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Dias Aviles Con Tarjeta Medicard :</Text>
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
    backgroundColor: "#1C6BA4",
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
    paddingLeft:5
  },
  info:{
    fontSize:18,
    marginTop:20,
    color: "#000000",
    textAlign: "center"
  }
});

export default Profile;