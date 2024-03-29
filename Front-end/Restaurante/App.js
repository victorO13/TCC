import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//PAGES
import loginRestaurantePage from './Src/Pages/loginRestaurante'
import finalizarCadastro from './Src/Pages/finalizarCadastroRestaurante'
import finalizarCadastroDescricao from './Src/Pages/finalizarCadastroDescricao'
import main from './Src/Pages/main'
import cadastrarPratos from './Src/Pages/cadastrarPratos'
import cadastrarMesas from './Src/Pages/cadastrarMesas'
import editPerfil from './Src/Pages/editPerfil'
import editMesas from './Src/Pages/editMesas'
import editPratos from './Src/Pages/editPratos'
import maisDetalhes from './Src/Pages/reservaMaisDetalhes'


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
        <Stack.Screen name='cadastrarMesas' component={cadastrarMesas} />
        <Stack.Screen name='editPerfil' component={editPerfil} />
        <Stack.Screen name='editMesas' component={editMesas} />
        <Stack.Screen name='editPratos' component={editPratos} />
        <Stack.Screen name='maisDetalhes' component={maisDetalhes} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}
