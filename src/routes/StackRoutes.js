import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Detalhes from '../pages/Detalhes';

export default function StackRoutes(){
    const Stack = createNativeStackNavigator();
    return(
        <Stack.Navigator>

            <Stack.Screen
            name='Home'
            component={Home}
            options={{
                headerShown: false,
            }}/>

            <Stack.Screen
            name='Detalhes'
            component={Detalhes}/>

        </Stack.Navigator>
    );
}