import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import WelcomeScreen from './src/screens/WelcomeScreen';
import SpellTypeScreen from './src/screens/SpellTypeScreen';
import SpellList from './src/components/SpellList';
import IndividualSpell from './src/components/IndividualSpell';
import Search from './src/components/Search';
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Welcome'>
                <Stack.Screen name='Welcome' component={WelcomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name='SpellTypes' component={SpellTypeScreen} options={{ headerShown: false }} />
                <Stack.Screen name='SpellList' component={SpellList} options={{ headerShown: false }} />
                <Stack.Screen name='IndividualSpell' component={IndividualSpell} options={{ headerShown: false }} />
                <Stack.Screen name='Search' component={Search} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
