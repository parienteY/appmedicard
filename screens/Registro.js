import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { Formik } from 'formik';
import * as yup from 'yup';
import { TextInput, Colors } from 'react-native-paper';
import { AXIOS } from "../connection/conecction";
import RNPickerSelect from "react-native-picker-select";
import { Checkbox } from 'react-native-paper';
import { useState } from "react";


export default function Registro(){
  const condiciones = `
  CONTRATO DE COBERTURA DE LA TARJETA DE DESCUENTO MEDICARD
  CONDICIONES GENERALES
  En virtud del presente contrato de cobertura, MEDICARD S.R.L. y la persona que esta adquiriendo la Tarjeta de descuento medico MEDICARD, en adelante denominada como el “BENEFICIARIO”, convienen en suscribir un contrato de descuento Medico de Salud por el cual MEDICARD S.R.L. prestará al BENEFICIARIO, en los términos y condiciones que se establecen en los siguientes artículos, los servicios médicos con el debido descuento.
  ARTICULO 1.- DEFINICIONES
  MEDICARD S.R.L.: Es la institución que emite el presente contrato, en base a las condiciones estipuladas de descuento Medico de salud.
  BENEFICIARIO: Es la persona natural que suscribe el presente contrato de cobertura de la tarjeta.
  MEDICARD: La tarjeta de descuento Medico de Salud; adecuándose a las condiciones enmarcadas en esta póliza.
  CONTRATO DE COBERTURA: Documento que instrumenta el descuento Medico de Salud, en el que se refleja la norma que de forma general, particular o especial, regula las relaciones contractuales convenidas entre MEDICARD S.R.L. y el BENEFICIARIO. Sólo cuando este contrato ha sido emitido y aceptado por ambas partes se puede decir que han nacido los derechos y obligaciones que del mismo se derivan. 
  PORCENTAJE DE DESCUENTO MEDICO: Es el porcentaje señalado en las Condiciones Particulares del contrato de cobertura que corresponde a la participación de MEDICARD S.R.L. en los gastos médicos del BENEFICIARIO, los mismos ya vienen pre establecidos en la página web www.medicard.com.bo
  ENFERMEDAD: Conjunto de signos y síntomas que tienen la misma evolución y proceden de una causa específica conocida o desconocida, que produce una alteración, daño o  trastorno en la salud por causa natural intrínseca o extrínseca al organismo del BENEFICIARIO y ajena a la voluntad del mismo. El tratamiento para su cura puede ser de orden clínico, medicamentoso o quirúrgico dentro de los servicios y prestaciones que se establecen en la nómina de prestaciones valorizadas de MEDICARD. 
  ATENCION HOSPITALARIA: Toda atención en Clínica, Hospital o Institución de Salud debidamente autorizada por autoridad médica competente en la que el BENEFICIARIO deba permanecer internado por más de 24 horas. Una vez dado de alta, la atención médica posterior se considera Ambulatoria. 
  ATENCION AMBULATORIA: Toda atención médica otorgada en Consultorio Médico, en Hospital, Clínica o Institución de Salud en la que el BENEFICIARIO permanezca menos de 24 horas. 
  ATENCION DE EMERGENCIA: Es el primer tratamiento ofrecido en la sala de Emergencia de un Hospital o Clínica inmediatamente después del repentino e inesperado cambio en la condición física de una persona, la cual requiere atención en un centro médico porque: 
  a)	La atención médica no puede prestarse adecuadamente y sin riesgo fuera del centro médico; o 
  b)	La atención adecuada no está disponible en otro lugar del área en el momento en que la atención inmediata se necesita; y de no ser ofrecida la atención en el centro médico, de acuerdo con lo estipulado por MEDICARD, se considera que ello resultaría en: 
  • La pérdida de la vida o de una extremidad; o 
  • En el deterioro significativo de una función corporal; o 
  • En la alteración funcional permanente de una parte del cuerpo. 
  EXCLUSIONES: Son las prestaciones médicas no cubiertas por el presente Contrato.
  TARJETA MEDICARD: Documento que forma parte del Certificado de Cobertura Individual del contrato de descuento de Asistencia Médica de MEDICARD S.R.L. Su función principal es certificar que el BENEFICIARIO portador de la misma cuenta con el servicio y cobertura del descuento de asistencia médica. La credencial contiene un código que deriva y comprueba los datos principales del BENEFICIARIO. LA TARJETA MEDICARD debe estar acompañada del carnet de identificación personal para que el BENEFICIARIO pueda ser atendido en cualquiera de las Unidades Adscritas. 
  ÓRDENES DE ATENCION: Son los documentos que emite MEDICARD S.R.L. para que el BENEFICIARIO pueda ser atendido y/o hacer uso de las prestaciones que se encuentran bajo la cobertura del descuento de Asistencia Médica. 
  ARTÍCULO 2º - COBERTURAS 
  MEDICARD S.R.L. realizará un descuento pre definido y aceptado por el beneficiario a los servicios generados por prestaciones médicas privadas en que incurra el BENEFICIARIO (precios pre establecidos en www.medicard.com.bo) en la ciudad de residencia habitual definida en el Certificado de Cobertura Individual y en todo el territorio nacional con las instituciones con las cuales MEDICARD S.R.L. tenga convenios, no alcanzando el amparo de la cobertura a ningún otro punto geográfico fuera del territorio de Bolivia. El BENEFICIARIO podrá acceder al descuento de las prestaciones médicas sólo a través de Unidades Adscritas y de Convenio que aparecen en la página www.medicard.com.bo y  no podrá acceder en ningún caso al Reembolso por Gastos Médicos  incurridos fuera de la red de Unidades Adscritas y de Convenio que aparecen en la página antes mencionada.
  ARTÍCULO 3º - BENEFICIOS 
  Los BENEFICIARIOS tendrán derecho a solicitar descuento por prestaciones de salud de acuerdo con las coberturas establecidas en las Condiciones Particulares del presente contrato, y según las definiciones que se presentan a continuación: 
  a)	Brindar a las personas que adquieran la tarjeta MEDICARD hasta el 70% de descuento en la atención de consulta médica privada (precios pre establecidos en la página web www.medicard.com.bo), con re consulta gratuita y tratamiento ambulatorio (no incluye descuento en medicamentos).
  b)	Brindar a las personas que adquieran la tarjeta MEDICARD hasta el 70% de descuento en las emergencias médicas que sean atendidas por nuestro personal (Red de Enfermería) de Ambulancia, Enfermería y Medicina General las 24 horas del día, los 365 días del año (precios pre establecidos en la página web www.medicard.com.bo): Curaciones, Inyectables, Sueros, Transporte de ambulancia, Medico general.
  c)	Brindar a las personas que adquieran  la tarjeta MEDICARD hasta el 70% de descuento en pruebas de Laboratorios, Rayos X, Tomografías, Ecografías, Endoscopias, Colonoscopía, Electrocardiogramas (precios pre establecidos en la página web www.medicard.com.bo)
  d)	Brindar a las personas que adquieran la tarjeta MEDICARD el 30 % de descuento en la internación  hospitalaria médica y que necesiten Cirugías (el descuento solo se aplica a la hotelería y quirófano. No incluye los medicamentos, ni los insumos ni el honorario del cirujano especialista) en las especialidades descritas en la página web www.medicard.com.bo 
  ARTÍCULO 4º - DEL INICIO DE COBERTURA 
  El beneficio de los descuentos de los servicios Médicos tiene amparo automático desde el inicio de la activación de la tarjeta MEDICARD.
  ARTÍCULO 5º - DE LA RESPONSABILIDAD PROFESIONAL 
  MEDICARD S.R.L. no se responsabiliza de los resultados de ningún tratamiento o atención ambulatoria, hospitalaria o cirugía  que reciba el BENEFICIARIO por parte de los profesionales o instituciones que los hubieran brindado. 
  ARTÍCULO 6º - TERMINACIÓN DE LA COBERTURA 
  Los beneficios de esta cobertura cesarán cuando ocurra el primero de los siguientes hechos: 
  a)	Cuando la vigencia de la tarjeta MEDICARD llegue a término, es decir en el plazo de un año desde la activación de la misma. 
  b)	Las declaraciones falsas o reticentes hechas con dolo o mala fe por parte del BENEFICIARIO hacen nulo el contrato de descuento por Servicios Médicos. 
  ARTÍCULO 7º - RESCISIÓN VOLUNTARIA DEL CONTRATO
  El presente contrato puede ser rescindido por voluntad unilateral de cualquiera de las partes. 
  ARTÍCULO 8.- PROVEEDORES DE SERVICIO 
  MEDICARD S.R.L. se guarda el derecho de cambiar de proveedores Adscritos y de Convenio de los servicios en salud en cualquier momento, si es que estos no cumpliesen con los términos y condiciones de los acuerdos arribados o se tuviese algún tipo de problema con ellos y no se pudiese seguir trabajando, sin que exista reclamo por parte de los beneficiarios o que esto signifique un corte del beneficio para quienes tienen su tarjeta. 
  ARTÍCULO 9º - CONCILIACIÓN Y ARBITRAJE
  Por la presente cláusula las partes intervinientes acuerdan y establecen que toda discrepancia, cuestión o reclamo, resultantes de la ejecución o interpretación del presente contrato o relacionado con el, directa o indirectamente, se resolverá definitivamente mediante Conciliación o Arbitraje en derecho, bajo el arbitraje institucional y en el marco de las normas del Centro de Conciliación y Arbitraje Comercial de La Cámara Nacional de Comercio de la ciudad de La Paz o el Centro de Conciliación y Arbitraje Comercial de la CAINCO de la ciudad de Santa Cruz de la Sierra, de acuerdo al reglamento vigente en los centros mencionados y a lo establecido por Ley N° 708 de fecha 25 de junio de 2015. Las controversias de hecho sobre las características técnicas del presente contrato, serán resueltas a través de peritaje. Si por esta vía no se llegara a un acuerdo sobre dichas controversias, éstas deberán definirse por la vía del arbitraje. Para el caso del Arbitraje, se conviene que las leyes aplicables en la controversia serán: el Código de Comercio, el Código Civil y las demás leyes conexas con la materia arbitral. Las partes acuerdan, de conformidad al art. 61 de la Ley N° 708, que el número de árbitros será de tres (3); cada parte designará a un número igual de árbitros en el plazo de diez (10) días, desde la última notificación con la contestación a la solicitud de arbitraje, debiendo entre éstos, en el plazo de diez (10) días, elegir al Árbitro impar. A falta de acuerdo de las partes o de los árbitros, la designación de uno o varios árbitros será efectuada en conformidad a lo establecido por el Reglamento del Centro de Conciliación y Arbitraje correspondiente. Las Reglas Procedimentales en las que se enmarcará el desarrollo del arbitraje, estarán contempladas en el Reglamento del Centro de Conciliación y Arbitraje correspondiente, considerando lo acordado en la presente Cláusula Arbitral. Se acuerda que, la resolución de la procedencia o improcedencia de las medidas cautelares, será resuelta únicamente por el Tribunal Arbitral, una vez sea constituido, consecuentemente no se prevé la designación de un Árbitro de Emergencia. 
  ARTÍCULO 10º - DOMICILIO 
  Se fija como domicilio especial para el cumplimiento de las obligaciones de este contrato, la ciudad donde fue suscrito, dentro del territorio del Estado Plurinacional de Bolivia. Cualquier comunicación al BENEFICIARIO por parte de MEDICARD S.R.L., se realizará a la dirección estipulada en las Condiciones Particulares del contrato. Si el BENEFICIARIO realizara un cambio de dirección que no fuera comunicada formalmente  a MEDICARD S.R.L., ésta se liberará de cualquier responsabilidad relacionada con las comunicaciones del contrato.
  ARTÍCULO 11º - JURISDICCIÓN Y COMPETENCIA 
  El conocimiento de las acciones judiciales emergentes del presente contrato, es de competencia y jurisdicción del juez del domicilio del BENEFICIARIO.`;
  const [checked, setChecked] = useState(true);
  const [sexo, setSexo] = useState(true);
    const registrar = async (nombres, apellidos, telefono, ci, dia, mes, año, codigo, sexo, email, password, ciudad) => {
      const body = {
        nombres, apellidos, telefono, ci, fecha_nacimiento: dia+"/"+mes+"/"+año ,codigo, sexo, email, password, ciudad: "cochabamba", rol:"USER_ROLE", condiciones: true, ciudad
      }
      try {
        const res = await AXIOS.then(res => {
          return res.post("usuarios", body)
        });

        if(res.data.status){
          Alert.alert("Registro exitoso")
        }
        
      } catch (error) {
        Alert.alert("Revise sus datos e inténtelo nuevamente")
      }
    }
    const registerValidationSchema = yup.object().shape({
        nombres: yup
        .string("Ingrese sus nombres")
        .required("El nombre es obligatorio"),
        condiciones: yup
        .boolean(false, "Acepte las términos y condiciones")
        .required("Debe aceptar los términos y condiciones"),
        apellidos: yup
        .string("Ingrese sus apellidos")
        .required("Los apellidos son obligatorios"),
        telefono: yup
        .string("Ingrese su telefono")
        .required("El telefono es obligatorio"),
        ciudad: yup
        .string("Ingrese su ciudad")
        .required("La ciudad es obligatoria"),
        ci: yup
        .string("Ingrese su ci")
        .required("El ci es obligatorio"),
        dia: yup
        .number("Ingrese el dia")
        .required("El dia es obligatorio")
        .min(1, "El día no es válido")
        .max(31, "El día no es válido"),
        mes: yup
        .number("Ingrese el mes")
        .required("El mes es obligatorio")
        .min(1, "El mes no es válido")
        .max(12, "El mes no es válido"),
        año: yup
        .number("Ingrese su año")
        .required("El año es obligatorio")
        .min(1900, "El año no es válido")
        .max(2022, "El año no es válido"),
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
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor:"white", paddingTop:40}}>
          <ScrollView>
            <View>
                <Text style={{textAlign:"center", fontSize: 25, fontWeight:'bold', color:"#E62D28", letterSpacing:8}}>REGISTRO</Text>
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
              <Text style={{marginStart: 35}}>Datos personales</Text>
        <TextInput style={styles.email} 
                  placeholder="Ingrese su nombre"
                  onChangeText={handleChange('nombres')}
                  label='Nombres'
                  onBlur={handleBlur('nombres')}
                  value={values.nombres}
                  keyboardType="default"
                  outlineColor="#43BAC1"
                  theme={{
                    colors: {
                      primary: '#43BAC1'}
                  }}
                  mode="outlined"
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
                  outlineColor="#43BAC1"
                  theme={{
                    colors: {
                      primary: '#43BAC1'}
                  }}
                  mode="outlined"
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
                  outlineColor="#43BAC1"
                  theme={{
                    colors: {
                      primary: '#43BAC1'}
                  }}
                  mode="outlined"
                  /> 
 
                  {(errors.telefono && touched.telefono) &&
                    <Text style={styles.errorText}>{errors.telefono}</Text>
                  }
<TextInput 
                  placeholder="Ingrese su carnet de identidad"
                  onChangeText={handleChange('ci')}
                  label='C.I'
                  onBlur={handleBlur('ci')}
                  value={values.ci}
                  style={styles.email}
                  keyboardType="email-address"
                  outlineColor="#43BAC1"
                  theme={{
                    colors: {
                      primary: '#43BAC1'}
                  }}
                  mode="outlined"
                  /> 
 
                  {(errors.ci && touched.ci) &&
                    <Text style={styles.errorText}>{errors.ci}</Text>
                  }
                    <View style={{ width: "78%", marginTop: 15, marginBottom: 10, alignSelf:"center", borderColor:'#43BAC1', borderWidth:1}}>
             <RNPickerSelect
                  placeholder={{
                    label: "Seleccione su ciudad"
                  }}
                 onValueChange={(value) => values.ciudad = value}
                 items={[
                     { label: "Cochabamba",    value: "Cochabamba" },
                     { label: "La Paz",        value: "La Paz" },
                     { label: "Santa Cruz",    value: "Santa Cruz" },
                     { label: "Oruro",         value: "Oruro" },
                     { label: "Sucre",         value: "Sucre" },
                     { label: "Potosi",        value: "Potosi"},
                     { label: "Beni",          value: "Beni"  },
                     { label: "Tarija",        value:"Tarija" }
                 ]}
             />
         </View>

                 

                <View style={{justifyContent: "center", alignItems:"center", marginTop: 10}}>
                <Text>Ingrese su fecha de nacimiento</Text>
                <View style={{ flexDirection:"row"}}>
                  <View style={{alignItems:"center"}}>
                  <TextInput style={[styles.email, {
                  width:70
                }]}  
                  onChangeText={handleChange('dia')}
                  label='Día'
                  onBlur={handleBlur('dia')}
                  value={values.dia}
                  keyboardType="default"
                  outlineColor="#43BAC1"
                  theme={{
                    colors: {
                      primary: '#43BAC1'}
                  }}
                  mode="outlined"
                  /> 
 
                  </View>
                <View style={{alignItems:"center"}}>
                  <TextInput style={[styles.email, {
                  width:70
                }]}  
                  onChangeText={handleChange('mes')}
                  label='Mes'
                  onBlur={handleBlur('mes')}
                  value={values.mes}
                  keyboardType="default"
                  outlineColor="#43BAC1"
                  theme={{
                    colors: {
                      primary: '#43BAC1'}
                  }}
                  mode="outlined"
                  /> 
                </View>
 
                  <View style={{alignItems:"center"}}>
                  <TextInput activeUnderlineColor="#0000" style={[styles.email, {
                  width:100
                }]}  
                  onChangeText={handleChange('año')}
                  label='Año'
                  onBlur={handleBlur('año')}
                  value={values.año}
                  keyboardType="default"
                  outlineColor="#43BAC1"
                  theme={{
                    colors: {
                      primary: '#43BAC1'}
                  }}
                  mode="outlined"
                  /> 
                  </View>

                </View>
                {(errors.dia && touched.dia) &&
                      <Text style={styles.errorText}>{errors.dia}</Text>
                  }
                  {(errors.mes && touched.mes) &&
                      <Text style={styles.errorText}>{errors.mes}</Text>                  
                  }
                  {(errors.año && touched.año) &&
                      <Text style={styles.errorText}>{errors.año}</Text>                 
                  }
                </View>
                <View style={{alignItems:"center", marginTop: 10}}>
                    <Text>Sexo</Text>
                    <View style={{flexDirection:"row"}}>
                    <Checkbox.Item label="M" style={{marginBottom: -10}} position="leading" status={sexo ? 'checked' : 'unchecked'} onPress={() => {
                    values.sexo = "masculino";
                    setSexo(!sexo);
                    }}/>
                      <Checkbox.Item label="F" style={{marginBottom: -10}} position="leading" status={!sexo ? 'checked' : 'unchecked'} onPress={() => {
                    values.sexo = "femenino";
                    setSexo(!sexo);
                    }}/>
                    </View>
                  </View>
         <Text style={{marginStart: 35}}>Datos de cuenta</Text>
                <TextInput style={styles.email} 
                  placeholder="Correo electronico..."
                  onChangeText={handleChange('email')}
                  label='Correo electronico'
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                  outlineColor="#43BAC1"
                  theme={{
                    colors: {
                      primary: '#43BAC1'}
                  }}
                  mode="outlined"
                  /> 
 
                  {(errors.email && touched.email) &&
                    <Text style={styles.errorText}>{errors.email}</Text>
                  }
                    <TextInput style={styles.email} 
                  placeholder="Ingrese su contraseña"
                  label='Contraseña'
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={true}
                  keyboardType="default"
                  outlineColor="#43BAC1"
                  theme={{
                    colors: {
                      primary: '#43BAC1'}
                  }}
                  mode="outlined"
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
                  outlineColor="#43BAC1"
                  theme={{
                    colors: {
                      primary: '#43BAC1'}
                  }}
                  mode="outlined"
                  /> 
 
                  {(errors.codigo && touched.codigo) &&
                    <Text style={styles.errorText}>{errors.codigo}</Text>
                  }
                <View style={styles.colorBtn}>
               

               <Checkbox.Item label="Acepto los términos y condiciones" style={{marginBottom: -10}} position="leading" status={checked ? 'checked' : 'unchecked'} onPress={() => {
                  values.condiciones = checked;
                  setChecked(!checked);
                }}/>
                <Text style={{marginBottom:12, color: "blue", textDecorationLine:"underline"}} onPress={() => Alert.alert("",condiciones)}>Leer mas</Text>

               {(errors.condiciones && touched.condiciones) &&
                      <Text style={styles.errorText}>{errors.condiciones}</Text>                 
                  }
                <TouchableHighlight
                underlayColor="#6FDBE1"
                  style={{
                    backgroundColor:"#43BAC1",
                    alignItems:'center',
                    height:38,
                    width:300,
                    marginBottom:20,
                    borderRadius:10
                  }}
                  onPress={() => {registrar(values.nombres,values.apellidos, values.telefono, values.ci, values.dia, values.mes, values.año, values.codigo, values.sexo, values.email, values.password,values.ciudad)}
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
          </ScrollView>
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
      marginLeft: 12,
      marginRight: 20, 
      fontWeight: '600',
      paddingLeft: 0,
      borderRadius: 7,
      paddingRight: 0,
      alignSelf:"center",
      height:50,
      width:"80%",
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
      marginLeft: 20,
      textAlign: "center"
    }
   
  });