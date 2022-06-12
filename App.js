import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AuthContext } from './utils/context';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import { useMemo, useState } from 'react';
import Home from './screens/Home';
import Registro from './screens/Registro';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CitasMedicas from './screens/CitasMedicas';
import Emergencias from './screens/Emergencias';
import LaboratorioClinico from './screens/LaboratorioClinico';
import Operaciones from './screens/Operaciones';
import Perfil from './screens/Perfil';
import Contacto from './screens/Contacto';
import Beneficio from './screens/Beneficio';
import Instituciones from './screens/Instituciones';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Pdfview from "./screens/Pdfview";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const LoginStack = createNativeStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveBackgroundColor:"white",
      tabBarActiveTintColor:"#43BAC1",
      tabBarInactiveTintColor:"white",
      tabBarInactiveBackgroundColor:"#43BAC1",
      tabBarItemStyle:{
        borderWidth:0,
        shadowOffset: {
          width: 0,
          height: 12,
        },
    },
      headerShown:false,
    }}>
      
      <Tab.Screen name="Contacto" component={Contacto} options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="information" color={color} size={40} />
        ),
        tabBarLabelStyle: {
          'fontSize': 15,
        },
        tabBarStyle:{
          height:60,
        }
      }}></Tab.Screen>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home-circle" color={color} size={40} />
        ),
          tabBarLabelStyle: {
            'fontSize': 15,

          },
          tabBarStyle:{
            height:60,
          }
          }}></Tab.Screen>
      <Tab.Screen name="Perfil" component={Perfil} options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account-circle" color={color} size={40} />
        ),
        tabBarLabelStyle: {
          'fontSize': 15,
        },
        tabBarStyle:{
          height:60,
        }
      }}></Tab.Screen>
      
    </Tab.Navigator>
  );
};
export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  const authContext = useMemo(() => {
      return {
        signIn: () => {
          setIsLogin(true);
        },
        signOut: () => {
          setIsLogin(false)
        }
      }
    }, [])
      return (
        <AuthContext.Provider value={authContext}>
        <NavigationContainer
        >
          {
            isLogin? (
              <Stack.Navigator 
              screenOptions={{
                headerShown: false,
                
              }}>
                <Stack.Screen name='App' component={TabNavigator}></Stack.Screen>
                <Stack.Screen name='Beneficio' component={Beneficio}></Stack.Screen>
                <Stack.Screen name="Citas" component={CitasMedicas}></Stack.Screen>
                <Stack.Screen name="Contacto" component={Contacto}></Stack.Screen>
                <Stack.Screen name="Emergencias" component={Emergencias}></Stack.Screen>
                <Stack.Screen name="LaboratorioClinico" component={LaboratorioClinico}></Stack.Screen>
                <Stack.Screen name="Operaciones" component={Operaciones}></Stack.Screen>
                <Stack.Screen name='Instituciones' component={Instituciones}></Stack.Screen>
                <LoginStack.Screen
              name="Pdf"
              component={Pdfview}
            ></LoginStack.Screen>
              </Stack.Navigator>
            ):(
              <LoginStack.Navigator 
              screenOptions={{
                headerShown: false,
                
              }}>
                <LoginStack.Screen name='Login' component={Login}></LoginStack.Screen>
                <LoginStack.Screen name='Registro' component={Registro}></LoginStack.Screen>
                <LoginStack.Screen name='CitasMedicas' component={CitasMedicas}></LoginStack.Screen>
              </LoginStack.Navigator>
            )
          }
        </NavigationContainer>
        </AuthContext.Provider>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
