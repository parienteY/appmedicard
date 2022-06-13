import { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Image, StyleSheet, Linking } from "react-native";
import { Button } from 'react-native-paper';

export default function Instituciones( {route,navigation}){
    const [actual, setActual] = useState({});

    const openGps = (lat, lng) => {
        var scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:';
        var url = scheme + `${lat},${lng}`;
        // Linking.openURL(url);
        Linking.openURL(
          Platform.OS === 'ios'
            ? 'googleMaps://app?saddr=6.931970+79.857750&daddr=6.909877+79.848521'
            : `google.navigation:q=${lat}+${lng}`
        )
      }

    useEffect(() => {
        buscarPorId();
    }, [])
    const instituciones = [
        {
            id: 1,
            nombre: "Clínica BuscaMed",
            contacto: "+591 (4)4333017 - +591 62604000",
            direccion: "Av. Melchor Urquidi entre América y Buenos Aires N°1412",
            pagina: "www.clinicabuscamed.com",
            imagen:require("../assets/img/Buscamed.jpg"),
            archivo:"https://www.medicard.com.bo/archivos/buscamed.pdf",
            longitud:'-17.373925337361474',
            latitud:'-66.14947800427645',
        },
        {
            id: 2,
            nombre: "Red de enfermería",
            contacto: "+591 (4)4330631 - +591 72731699",
            direccion: "Av. Heroinas N°1147 entre Aurelio Melean y José Arauco",
            pagina: "siemen-rt@hotmail.com",
            imagen:require("../assets/img/reenfermeria.jpeg"),
            archivo:"https://www.medicard.com.bo/archivos/redenfermeria.pdf",
            longitud:'-17.390235900879635',
            latitud:'-66.14713600280393',
        },
        {
            id: 3,
            nombre: "Unimagen",
            direccion: "Central Calle Venezuela N°1071 frente Hospital Viedma",
            contacto: "+591 (4)4531273 - +591 68504467",
            sucursal: "Sucursal Aniceto Padilla N°533 entre Recoleta y Potosí",
            contactoS:"+591 (4)4496876 - +591 71428821",
            pagina: "unimagen2004@hotmail.com",
            imagen:require("../assets/img/Unimagen.jpg"),
            archivo:"https://www.medicard.com.bo/archivos/unimagen.pdf",
            longitud:'-17.38535609712205',
            latitud:'-66.14894435501316',
        },
        {
            id:4,
            nombre: "Coldent",
            direccion: "Calle Paso del Inca N°312 esq. Tupac Amaru Edificio Tarija 1er piso Of. B (Frente a la UPAL)",
            contacto: "+591 (4)4461102 - +591 76462744",
            pagina: "vivianmonicachavezsubieta@hotmail.com",
            imagen:require("../assets/img/Coldent.jpeg"),
            archivo:"https://www.medicard.com.bo/archivos/cold.pdf",
            longitud:'-17.3696179852243185',
            latitud:'-66.16032667183222',
        },
        {
            id: 5,
            nombre: "Laboratorio clínico Marbella S.R.L.",
            direccion: "Av. San Martín N°147 entre Heroínas y Colombia edificio Principito 2o piso Of. 4B",
            contacto: "+591 (4)4510966 - +591 79748908",
            pagina:"laboratoriomarbella@gmail.com",
            imagen:require("../assets/img/Marbella.jpg"),
            archivo:"https://www.medicard.com.bo/archivos/marbella.pdf",
            longitud:'-17.391271490344565',
            latitud:'-66.15474807067189',
        },
        {
            id:6,
            nombre: "Clínica Los Lirios",
            direccion: "Carlos Davis N°1518 entre av. Belzu y José Pol",
            contacto: "+591 69422413",
            pagina: "contacto@clinicaloslirios.com",
            imagen:require("../assets/img/Lirios.jpg"),
            archivo:"https://www.medicard.com.bo/archivos/lirios.pdf",
            longitud:'-17.388090195308123',
            latitud:'-66.14495187243007',
        },
        {
            id:6,
            nombre: "C.A.O. Servicio de Atención Oftalmológica",
            direccion: "Calle Colombia N°810 esq. 16 de Julio Edificio Guadalupe 2° Piso Cons. 3",
            contacto: "+591 (4)4661452 - +591 70758337",
            pagina: "meguerragueo@gmail.com",
            imagen:require("../assets/img/CAO.jpg"),
            archivo:"https://www.medicard.com.bo/archivos/CAO.pdf",
        }
    ];

    const buscarPorId = () => {
        instituciones.forEach(element => {
            if(route.params.id === element.id){
                setActual(element);
            }
        });
    }

    return (

        <SafeAreaView style={{alignItems:"center", flex:1, backgroundColor:"white"}}>
            <View>
                <View style={estilos.contenedorImagen}>
                <Image style={estilos.imagen}  source={actual.imagen}></Image>
               <Text style={estilos.titulo}>{actual.nombre}</Text>
                </View>
                <View style={estilos.contenido}>
                <View style={estilos.info}>
                <Text style={estilos.txt}>Dirección</Text>
               <Text style={estilos.txt}>{actual.direccion}</Text>
                </View>
                <View style={estilos.info}>
                <Text style={estilos.txt}>Números de contacto</Text>
               <Text style={estilos.txt}>{actual.contacto}</Text>
                </View>
                <View style={estilos.info}>
                <Text style={estilos.txt}>Correo electrónico</Text>
               <Text style={estilos.txt}>{actual.pagina}</Text> 
                </View>
                </View>
                <View style={{
                    flexDirection:"row",
                }}>
                      <Button mode="contained" disabled={false} style={{
                  backgroundColor:"#43BAC1",
                //   height:38,
                //   width:300,
                height:50,
                width:150,
                marginStart:5,
                padding:5,
                }}
                onPress={() => {
                    openGps(actual.longitud, actual.latitud)
                  }}>
 <Text style={{fontSize:11}}>
                  VER UBICACIÓN
                    </Text></Button>
                    <Button mode="contained" disabled={false} style={{
                  backgroundColor:"#E62D28",
                //   height:38,
                marginStart: 5,
                //   width:300,
                height:50,
                padding:5,
                }}
                onPress={() => {
                    navigation.push("Pdf", {
                      uri: actual.archivo,
                    });
                  }}>
                    <Text style={{fontSize:11}}>
                  VER PRECIOS CON MEDICARD
                    </Text>
                </Button>
                </View>
            </View>
        </SafeAreaView>
    )
}

const estilos = StyleSheet.create({
    contenedorImagen: {
        alignItems:"center",
        backgroundColor:"white",
        justifyContent:"center",
        height:500
    },
    imagen: {
        width: "90%",
        height:"70%",
        margin: "auto" 
    },
    titulo: {
        fontSize: 35,
        paddingTop:5,
        letterSpacing:1,
        textAlign:"center",
        color:"#43BAC1",
        textTransform:"uppercase"
    },
    contenido: {
        borderColor:"#E62D28",
        borderWidth:2,
        marginBottom:10,
        borderRadius:10
    },
    info:{
        paddingTop:10,
        paddingBottom:10,
        paddingStart:10,
        paddingRight:10,
        width:"100%",

    },
    txt: {
        color:"black",
        fontSize:17,
        letterSpacing:0.5,
        opacity:0.5
    }
})