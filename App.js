import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AuthContext } from './utils/context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import { useMemo, useState } from 'react';
import Home from './screens/Home';
import Perfil from './screens/Perfil';
import Registro from './screens/Registro';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const LoginStack = createNativeStackNavigator();


const TabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarItemStyle:{
        borderWidth:0,
        shadowOffset: {
          width: 0,
          height: 12,
        },
    },
      headerShown:false,
    }}>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={'#7B8D9E'} size={40} />
        ),
          tabBarLabelStyle: {
            'fontSize': 15,
             'color': "#7B8D9E",

          },
          tabBarStyle:{
            height:55,
          }
          }}></Tab.Screen>
      <Tab.Screen name="Perfil" component={Perfil} options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={'#7B8D9E'} size={40} />
        ),
        tabBarLabelStyle: {
          'fontSize': 15,
          'color': "#7B8D9E",
        },
        tabBarStyle:{
          height:55,
        }
      }}></Tab.Screen>
    </Tab.Navigator>
  )
}
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
              </Stack.Navigator>
            ):(
              <LoginStack.Navigator 
              screenOptions={{
                headerShown: false,
                
              }}>
                <LoginStack.Screen name='Login' component={Login}></LoginStack.Screen>
                <LoginStack.Screen name='Registro' component={Registro}></LoginStack.Screen>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
