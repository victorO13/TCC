import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//PAGES
import loginRestaurantePage from './Src/Pages/loginRestaurante'
import finalizarCadastro from './Src/Pages/finalizarCadastroRestaurante'
import finalizarCadastroDescricao from './Src/Pages/finalizarCadastroDescricao'
import main from './Src/Pages/main'
import cadastrarPratos from './Src/Pages/cadastrarPratos'


//NAVIGATIONS
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="loginRestaurante" screenOptions={{ headerShown: false }}>
        <Stack.Screen name='loginRestaurante' component={loginRestaurantePage} />
        <Stack.Screen name='main' component={main} />
        <Stack.Screen name='finalizarCadastro' component={finalizarCadastro} />
        <Stack.Screen name='finalizarCadastroDescricao' component={finalizarCadastroDescricao} />
        <Stack.Screen name='cadastrarPratos' component={cadastrarPratos} />

      </Stack.Navigator>
    </NavigationContainer >
  );
}
