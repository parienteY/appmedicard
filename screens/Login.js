import React, {useContext, useEffect, useState} from 'react';
import { StyleSheet, View, Text, Alert, ImageBackground, TouchableHighlight, SafeAreaView, ScrollView, Image} from 'react-native';
import { TextInput, Colors } from 'react-native-paper';
import { Formik } from 'formik';
import * as yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AwesomeAlert from 'react-native-awesome-alerts';
import * as global from '../utils/context';
import { AXIOS } from '../connection/conecction';



const Login = ({navigation}) => {
  const { signIn } = useContext(global.AuthContext);
  const [alert, setAlert] = useState(false);
  const [mensaje, setMensaje] = useState('');
  const [init, setInit] = useState(false);
  const [usuario, setUsuario] = useState();
  const showAlert = () => {
   setAlert(true)
  };

 




const loginNormal = async (correo, ci) => {
  
  const body = {
    correo,
    password: ci
  }
  try {
    const res = await AXIOS.then(res => {
      return res.post("auth/login", body)
    })
    console.log(res.data)
    if(res.data.status){
      guardarToken(res.data.token, 'token');
      guardarToken(JSON.stringify(res.data.usuario), 'usuario')
      signIn();
      // navigation.reset({
      //   index: 0,
      //   routes : [{name: 'App'}]
      // })
    }
  } catch (error) {
    console.log(error)
    setAlert(false);
    setMensaje("Revise sus datos e inténtelo nuevamente");
    showAlert();
  }
  
}



const guardarToken = async (usuario, nombre) => {
  try {
    await AsyncStorage.setItem(nombre, usuario );
    return true;
  } catch (e) {
    // saving error
    return false;
  }
}


  
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string("Ingrese su Email")
      .required("El email es obligatorio")
      .email('Ingrese un email valido'),
    password: yup
      .string("La contrasena no es valida")
      .required("La contraseña es obligatoria")
      .min(6, ({ min }) => 'La contraseña debe ser de almenos 6 caracteres')

  });
  
  const navegar = () => {
  }
   return (
        <View style={{ flex: 1}}>
          <SafeAreaView 
          style={{flex:3}}
      >
        <ScrollView style={{backgroundColor: "white"}}>
          <View style={{
            justifyContent:"center",
            marginTop:150,
            alignItems:"center"
          }}>
            <Image source={require('../assets/img/MEDICARD.png')}
            style = {{ width: 200, height: 200 }}
            ></Image>
          <Formik
            validateOnMount={true}
            validationSchema={loginValidationSchema}
            initialValues={{  email:'', password: '' }}
            onSubmit={values => {navegar}}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isValid,
            }) => (
              <>
        
                <TextInput style={styles.email} 
                  placeholder="Correo electronico..."
                  onChangeText={handleChange('email')}
                  label='Correo electronico'
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                  theme={{
                    colors: {
                      primary: 'black',underlineColor:'white'}
                  }}
                  /> 
 
                  {(errors.email && touched.email) &&
                    <Text style={styles.errorText}>{errors.email}</Text>
                  }
                    <TextInput style={styles.email} 
                  placeholder="Carnet de identidad..."
                  label='Carnet de identidad'
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={true}
                  keyboardType="default"
                  theme={{
                    colors: {
                      primary: 'black',underlineColor:'white'}
                  }}
                   /> 
 
                  {(errors.password && touched.password) &&
                    <Text style={styles.errorText}>{errors.password}</Text>
                  }

         
                <View style={styles.colorBtn}>
                <TouchableHighlight
                underlayColor="#0000"
                  style={{
                    backgroundColor:"#43BAC1",
                    alignItems:'center',
                    height:38,
                    width:300,
                  }}
                  onPress={() => {loginNormal(values.email, values.password)}
                }
                >
                  <Text style={{
                    color:'white',
                    fontWeight:'bold',
                    fontSize: 18,
                    paddingTop:6
                  }}>Iniciar sesión</Text>
                </TouchableHighlight>
                </View>
                <View style={styles.colorBtn}>
                <TouchableHighlight
                underlayColor="#0000"
                  style={{
                    backgroundColor:"#E62D28",
                    alignItems:'center',
                    height:38,
                    width:300,
                  }}
                  onPress={() => {navigation.push("Registro")}
                }
                >
                  <Text style={{
                    color:'white',
                    fontWeight:'bold',
                    fontSize: 18,
                    paddingTop:6
                  }}>Registrarse</Text>
                </TouchableHighlight>
                </View>
              </>
            )}
          </Formik>
          <AwesomeAlert
          show={alert}
          showProgress={false}
          message={mensaje}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          confirmButtonColor="#DD6B55"
          
        />

          </View>

          <View style={{ justifyContent: 'center',alignItems: 'center', marginTop:170}}>
          {/* <Image source={require("../assets/images/1.png")} style={{width:400,height:400}}></Image> */}
          </View> 

            </ScrollView>
          </SafeAreaView>
         
        </View>      
  )
};
 
const styles = StyleSheet.create({
 
  formulario: {
    color: Colors.black,
    fontSize: 18,
    marginTop: 20,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'center',
  },
  email: {
    color: Colors.dark,
    fontSize: 18,
    backgroundColor:'white',
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20, 
    fontWeight: '600',
    paddingLeft: 10,
    borderRadius: 7,
    paddingRight: 12,
    alignSelf:"center",
    height:50,
    width:"80%",
    borderColor:'#43BAC1',
    borderWidth:3,
    shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.3,
      shadowRadius: 13.00,
      elevation: 16,
  }, 
 
  colorBtn: {
    padding: 4,
    marginTop:10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 7,
    alignItems:"center",
  },
 
  colorTxtBtn: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center'
  },
 
  errorText: {
    fontSize: 14,
    color: 'red',
    marginBottom: 5,
    marginLeft: 20
  }
 
});
 
export default Login;