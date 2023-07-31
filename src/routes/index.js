import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Feather from 'react-native-vector-icons/Feather'
import StackRoutes from './StackRoutes';
import Sobre from '../pages/Sobre';
import Contato from '../pages/Contato'

const Tab = createBottomTabNavigator();

export default function Routes(){
  return(


      <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: '#FFF',
        tabBarStyle: {
          backgroundColor: '#121212',
          borderTopWidth: 0}
      }}>
        
        <Tab.Screen
        name='HomeStack'
        component={StackRoutes}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => {
            return <Feather name='home' color={color} size={size}/>
          },
        }}/>

        <Tab.Screen
        name='Sobre'
        component={Sobre}
        options={{
          tabBarLabel: 'Sobre',
          tabBarIcon: ({color, size}) => {
            return <Feather name='file-text' color={color} size={size}/>
          },
        }}/>

        <Tab.Screen
        name='Contato'
        component={Contato}
        options={{
          tabBarLabel: 'Contato',
          tabBarIcon: ({color, size}) => {
            return <Feather name='phone-call' color={color} size={size}/>
          },
        }}/>

      </Tab.Navigator>      
  );
}