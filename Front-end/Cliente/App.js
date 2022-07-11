import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//PAGES
import loginClientePage from './Src/Pages/loginCliente'

//NAVIGATIONS
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="loginCliente" screenOptions={{ headerShown: false }}>
        <Stack.Screen name='loginCliente' component={loginClientePage} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}
