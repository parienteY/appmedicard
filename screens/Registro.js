import { SafeAreaView, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { Formik } from 'formik';
import * as yup from 'yup';
import { TextInput, Colors } from 'react-native-paper';

export default function Registro(){
    const registerValidationSchema = yup.object().shape({
        nombres: yup
        .string("Ingrese sus nombres")
        .required("El nombre es obligatorio"),
        apellidos: yup
        .string("Ingrese sus apellidos")
        .required("Los apellidos son obligatorios"),
        telefono: yup
        .string("Ingrese su telefono")
        .required("El telefono es obligatorio"),
        ci: yup
        .string("Ingrese su ci")
        .required("El ci es obligatorio"),
        fecha: yup
        .string("Ingrese sus fecha de nacimiento")
        .required("La fecha de nacimiento es obligatoria"),
        codigo: yup
        .string("Ingrese el código de la tarjeta")
        .required("El código es obligatorio"),
        sexo: yup
        .string("Ingrese su sexo")
        .required("El sexo es obligatorio"),
        email: yup
          .string("Ingrese su Email")
          .required("El email es obligatorio")
          .email('Ingrese un email valido'),
        password: yup
          .string("La contrasena no es valida")
          .required("La contraseña es obligatoria")
          .min(6, ({ min }) => 'La contraseña debe ser de almenos 6 caracteres')
    
      });
    return(
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor:"white"}}>
            <View>
                <Text style={{textAlign:"center", fontSize: 25, fontWeight:'bold', color:"#E62D28"}}>REGISTRO</Text>
                <Formik
            validateOnMount={true}
            validationSchema={registerValidationSchema}
            initialValues={{  email:'', password: '', sexo: '', codigo: '', fecha: '',
        telefono: '', ci: '', nombres: '', apellidos: '' }}
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
                  placeholder="Ingrese su nombre"
                  onChangeText={handleChange('nombres')}
                  label='Nombres'
                  onBlur={handleBlur('nombres')}
                  value={values.nombres}
                  keyboardType="default"
                  theme={{
                    colors: {
                      primary: 'black',underlineColor:'white'}
                  }}
                  /> 
 
                  {(errors.nombres && touched.nombres) &&
                    <Text style={styles.errorText}>{errors.nombres}</Text>
                  }
                  <TextInput style={styles.email} 
                  placeholder="Ingrese su apellido"
                  onChangeText={handleChange('apellidos')}
                  label='Apellidos'
                  onBlur={handleBlur('apellidos')}
                  value={values.apellidos}
                  keyboardType="email-address"
                  theme={{
                    colors: {
                      primary: 'black',underlineColor:'white'}
                  }}
                  /> 
                  {(errors.apellidos && touched.apellidos) &&
                    <Text style={styles.errorText}>{errors.apellidos}</Text>
                  }

<TextInput style={styles.email} 
                  placeholder="Ingrese su celular o telefono"
                  onChangeText={handleChange('telefono')}
                  label='Celular/Telefono'
                  onBlur={handleBlur('telefono')}
                  value={values.telefono}
                  keyboardType="email-address"
                  theme={{
                    colors: {
                      primary: 'black',underlineColor:'white'}
                  }}
                  /> 
 
                  {(errors.telefono && touched.telefono) &&
                    <Text style={styles.errorText}>{errors.telefono}</Text>
                  }
<TextInput style={styles.email} 
                  placeholder="Ingrese su carnet de identidad"
                  onChangeText={handleChange('ci')}
                  label='C.I'
                  onBlur={handleBlur('ci')}
                  value={values.ci}
                  keyboardType="email-address"
                  theme={{
                    colors: {
                      primary: 'black',underlineColor:'white'}
                  }}
                  /> 
 
                  {(errors.ci && touched.ci) &&
                    <Text style={styles.errorText}>{errors.ci}</Text>
                  }

<TextInput style={styles.email} 
                  placeholder="Ingrese el sexo"
                  onChangeText={handleChange('sexo')}
                  label='Sexo'
                  onBlur={handleBlur('sexo')}
                  value={values.sexo}
                  keyboardType="default"
                  theme={{
                    colors: {
                      primary: 'black',underlineColor:'white'}
                  }}
                  /> 
 
                  {(errors.sexo && touched.sexo) &&
                    <Text style={styles.errorText}>{errors.sexo}</Text>
                  }

<TextInput style={styles.email} 
                  placeholder="Ingrese su fecha de nacimiento"
                  onChangeText={handleChange('fecha')}
                  label='Fecha de nacimiento'
                  onBlur={handleBlur('fecha')}
                  value={values.fecha}
                  keyboardType="default"
                  theme={{
                    colors: {
                      primary: 'black',underlineColor:'white'}
                  }}
                  /> 
 
                  {(errors.fecha && touched.fecha) &&
                    <Text style={styles.errorText}>{errors.fecha}</Text>
                  }
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

<TextInput style={styles.email} 
                  placeholder="Ingrese el código de la tarjeta"
                  onChangeText={handleChange('codigo')}
                  label='Código'
                  onBlur={handleBlur('codigo')}
                  value={values.codigo}
                  keyboardType="default"
                  theme={{
                    colors: {
                      primary: 'black',underlineColor:'white'}
                  }}
                  /> 
 
                  {(errors.codigo && touched.codigo) &&
                    <Text style={styles.errorText}>{errors.codigo}</Text>
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
                  onPress={() => {}
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
            </View>
        </SafeAreaView>
    )
}
 
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