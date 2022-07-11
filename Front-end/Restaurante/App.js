import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//PAGES
import loginRestaurantePage from './Src/Pages/loginRestaurante'

//NAVIGATIONS
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="loginRestaurante" screenOptions={{ headerShown: false }}>
        <Stack.Screen name='loginRestaurante' component={loginRestaurantePage} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}
