import {Text, View, StyleSheet, Alert } from "react-native";
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../utils/context";
import {obtenerUsuario} from '../utils/helpers'
import moment from "moment";
import { AXIOS } from "../connection/conecction";

export default function Perfil(){
    const {signOut} = useContext(AuthContext);
    const [usuario, setUsuario] = useState({});
    const [diferencia, setDiferencia] = useState(0);

    const cambiarEstado = async (email) => {
        const body = {
            email
        }
        console.log(body)
        const res = await AXIOS.then(res => {
            return res.post("usuarios/cambiar/estado", body)
        })
        if(res.data.status === true){
            Alert.alert(  
                'Tarjeta vencida',  
                'Renueve su tarjeta medicard yendo a los puntos de venta autorizados',  
                [    
                    {text: 'Aceptar', onPress: () => {
                        signOut()
                    }},  
                ]  
            );  
        }
        
    }
   
    useEffect(() => {
        const usuario = async() => {
            const  res = await obtenerUsuario();
            setUsuario(res);
            const fechaA = moment(new Date());
            const fechaM = moment(res.fecha_activacion);
            const fechaF = fechaM.add(1,"year");
            console.log(fechaF, fechaA)
            //setDiferencia(fechaF.diff(fechaA, 'days')+1)
            let diff = fechaF.diff(fechaA, 'days')+1;
            setDiferencia(diff)
            if(diff === 0){
                cambiarEstado(res.email);
            }
        }
        usuario();


    },[]);
    const cerrar = async () => {
        await AsyncStorage.clear().then(res => {
            signOut();
        })
    }
    const cerrarSesion = () => {
        Alert.alert(  
            'Cerrar Sesión',  
            '¿Seguro que desea cerrar la sesión?',  
            [  
                {  
                    text: 'Cancel',  
                    onPress: () => console.log('Cancel Pressed'),  
                    style: 'cancel',  
                },  
                {text: 'Aceptar', onPress: () => {
                    cerrar()
                }},  
            ]  
        );  
       
      }
    return (
        <View>
            <View style={{
                padding: 30,
                paddingTop: 120,
                backgroundColor:"#43BAC1"
            }}>
            <Text style={{
                marginTop:10,
                color: 'white',
                fontSize: 18,
                fontWeight: "bold"
            }}>{usuario.nombres + " " + usuario.apellidos}</Text>
            <Text style={{
                color:"white",
                fontSize:12
            }}>{usuario.email}</Text>
            </View>
            <View>
                <View style={{
                    padding: 30,
                }}>
                <View style={estilos.datos}>
                <Text style={estilos.titulo}>Teléfono/Celular</Text>
                    <Text style={estilos.contenido}> {usuario.telefono}</Text>
                </View>

                <View style={estilos.datos}>
                <Text style={estilos.titulo}>Carnet de identidad</Text>
                <Text style={estilos.contenido}>{usuario.ci}</Text>
                </View>
                <View style={estilos.datos}>
                <Text style={estilos.titulo}>Ciudad</Text>
                <Text style={estilos.contenido}>{usuario.ciudad}</Text>
                </View>
                <View style={estilos.datos}>
                <Text style={estilos.titulo}>Código</Text>
                <Text style={estilos.contenido}>{usuario.codigo}</Text>
                </View>
                <View style={{
                    padding: 20,
                    justifyContent: "center",
                    alignItems:"center",
                    borderColor:"#43BAC1",
                    borderRadius: 20,
                    borderWidth: 1,
                    marginTop: 10
                }}>
                {
                    diferencia === 0? (
                        <Text style={{
                            fontSize: 20,
                            color:"#E62D28",
                            letterSpacing: 1
                        }}>Su tarjeta ha vencido</Text>
                    ): (<Text style={{
                        fontSize: 20,
                        color:"#E62D28",
                        letterSpacing: 1
                    }}>Días restantes: {diferencia}</Text>)
                }

                </View>
                </View>
                <Button mode="contained" disabled={false} onPress={() =>
                 {cerrarSesion()}} style={{
                  backgroundColor:"red",
                  alignSelf:"center",
                  alignItems:'center',
                //   height:38,
                //   width:300,
                  top:0,
                  flex:0,
                  borderRadius:10
                }}>
                  CERRAR SESIÓN
                </Button>
                </View>
         
        </View>
    )
}

const estilos = StyleSheet.create({
    datos: {
        borderBottomWidth:0.5,
        borderBottomColor:"#43BAC1",
        paddingTop: 20,
        paddingBottom:20

    },
    titulo:{
        fontSize:16,
        fontWeight:"bold",
        letterSpacing: 1.5,
        color: "grey"
    },
    contenido: {
        fontSize:15,
        color: "gray",
        textTransform:"uppercase"
    }
})                                                                                      