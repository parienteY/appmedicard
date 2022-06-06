import React from 'react';
import { obtenerUsuarioPorToken } from '../utils/helpers';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = React.createContext();

export let Usuario = {}

export const obtenerUsuarioGlobal = async () => {
        const value = await AsyncStorage.getItem('token')
        if(value !== null) {
          const usuario = obtenerUsuarioPorToken(value)
          Usuario = usuario.data;
        }
}