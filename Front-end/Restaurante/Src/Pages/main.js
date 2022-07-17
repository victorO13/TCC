import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//ICONS
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
//NAVIGATIONS
const Tab = createBottomTabNavigator()

//PAGES
import pratosPage from './finalizarCadastroRestaurante'
import reservaPage from './cadastrarMesas'
import perfilPage from './perfil'
import mesasPage from './cadastrarPratos'


//STYLES - COLORS
import colors from '../Styles/Colors/Colors'

export default function MainScreen({ route, navigation }) {
  //console.log(route.params)


  return (
    <Tab.Navigator

      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          size = 40
          let iconName
          let typeIcon = 'ionicons'
          if (route.name === 'reserva') {
            typeIcon = 'antDesign'
            iconName = focused ? 'calendar' : 'calendar'
          } else if (route.name === 'pratos') {
            typeIcon = 'ionicons'
            iconName = focused ? 'ios-restaurant' : 'ios-restaurant'
          } else if (route.name === 'perfil') {
            typeIcon = 'fontAwesome'
            iconName = focused ? 'user-circle' : 'user-circle'
          } else if (route.name === 'mesas') {
            typeIcon = 'materialIcons'
            iconName = focused ? 'format-list-bulleted' : 'format-list-bulleted'
          }

          if (typeIcon == 'antDesign') {
            return <AntDesign name={iconName} size={size} color={color} />
          } else if (typeIcon == 'fontAwesome') {
            return <FontAwesome name={iconName} size={size} color={color} />
          } else if (typeIcon == 'materialIcons') {
            return <MaterialIcons name={iconName} size={size} color={color} />
          } else {
            return <Ionicons name={iconName} size={size} color={color} />
          }

        },
        "tabBarActiveTintColor": colors.primary,
        "tabBarInactiveTintColor": colors.secondary,
        "tabBarShowLabel": false,
      })}
    >
      <Tab.Screen name="mesas" options={{ headerShown: false }} component={mesasPage} initialParams={route.params} />
      <Tab.Screen name="reserva" options={{ headerShown: false }} component={reservaPage} initialParams={route.params} />
      <Tab.Screen name="pratos" options={{ headerShown: false }} component={pratosPage} initialParams={route.params} />
      <Tab.Screen name="perfil" options={{ headerShown: false }} component={perfilPage} initialParams={route.params} />
    </Tab.Navigator>
  )
}