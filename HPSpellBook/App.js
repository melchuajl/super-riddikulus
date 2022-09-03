import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import WelcomeScreen from './src/screens/WelcomeScreen';
import SpellTypeScreen from './src/screens/SpellTypeScreen';
import SpellList from './src/screens/SpellList';
import IndividualSpell from './src/screens/IndividualSpell';
import Search from './src/screens/Search';
import NotesList from './src/screens/NotesList';
import NotesInput from './src/screens/NotesInput';
import IndividualNote from './src/screens/IndividualNote';
import IndividualIngredient from './src/screens/IndividualIngredient';
import IngredientList from './src/screens/IngredientList';
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Welcome'>
                <Stack.Screen name='Welcome' component={WelcomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name='SpellTypes' component={SpellTypeScreen} options={{ animation: 'fade', headerShown: false }} />
                <Stack.Screen name='SpellList' component={SpellList} options={{ headerShown: false }} />
                <Stack.Screen name='IndividualSpell' component={IndividualSpell} options={{ headerShown: false }} />
                <Stack.Screen name='Search' component={Search} options={{ animation: 'fade_from_bottom', headerTintColor: 'black', headerTitleStyle: { fontFamily: 'CroissantOne', fontWeight: 'bold' } }} />
                <Stack.Screen name='NotesList' component={NotesList} options={{ animation: 'fade', headerShown: false }} />
                <Stack.Screen name='NotesInput' component={NotesInput} options={{ title: '', headerTintColor: 'black' }} />
                <Stack.Screen name='IndividualNote' component={IndividualNote} options={{ headerShown: false }} />
                <Stack.Screen name='IndividualIngredient' component={IndividualIngredient} options={{ headerShown: false }} />
                <Stack.Screen name='IngredientList' component={IngredientList} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
