import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import MainScreen from './src/screens/MainScreen';
import TTS from './src/components/TTS';
import SpellTypeScreen from './src/screens/SpellTypeScreen';
import SpellList from './src/components/SpellList';
import IndividualSpell from './src/components/IndividualSpell';
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='SpellList'>
                <Stack.Screen name='TTS' component={TTS} options={{ headerShown: false }} />
                <Stack.Screen name='Welcome' component={MainScreen} options={{ headerShown: false }} />
                <Stack.Screen name='SpellTypes' component={SpellTypeScreen} options={{ headerShown: false }} />
                <Stack.Screen name='SpellList' component={SpellList} options={{ headerShown: false }} />
                <Stack.Screen name='IndividualSpell' component={IndividualSpell} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
