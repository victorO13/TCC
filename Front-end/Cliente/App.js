import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//PAGES
import LoginClientePage from './Src/Pages/loginCliente'
import FinalizarCadastroCliente from './Src/Pages/finalizarCadastroCliente'

//NAVIGATIONS
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="loginCliente" screenOptions={{ headerShown: false }}>
        <Stack.Screen name='loginCliente' component={LoginClientePage} />
        <Stack.Screen name='finalizarCadastroCliente' component={FinalizarCadastroCliente} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}
