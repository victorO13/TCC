import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//ICONS
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'

//NAVIGATIONS
const Tab = createBottomTabNavigator()

//PAGES
import teste from './finalizarCadastroCliente'
import perfilPage from './perfil'
import t from './loginCliente'

//STYLES - COLORS
import colors from '../Styles/Colors/Colors'


export default function MainScreen({ route, navigation }) {
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
          } else if (route.name === 'restaurante') {
            typeIcon = 'ionicons'
            iconName = focused ? 'ios-restaurant' : 'ios-restaurant'
          } else if (route.name === 'perfil') {
            typeIcon = 'fontAwesome'
            iconName = focused ? 'user-circle' : 'user-circle'
          }

          if (typeIcon == 'antDesign') {
            return <AntDesign name={iconName} size={size} color={color} />
          } else if (typeIcon == 'fontAwesome') {
            return <FontAwesome name={iconName} size={size} color={color} />
          } else {
            return <Ionicons name={iconName} size={size} color={color} />
          }

        },
      })}
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.secondary,
        showLabel: false,


      }}>


      <Tab.Screen screenOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.secondary,
        showLabel: false,
      }} name="reserva" component={t} initialParams={route.params} />
      <Tab.Screen screenOptions={{ headerShown: false }} name="restaurante" component={teste} initialParams={route.params} />
      <Tab.Screen screenOptions={{ headerShown: false }} name="perfil" component={perfilPage} initialParams={route.params} />
    </Tab.Navigator>
  )
}