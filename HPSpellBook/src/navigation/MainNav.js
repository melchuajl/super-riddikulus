import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from '../screens/WelcomeScreen';
import ContentPage from '../screens/ContentPage';
import SpellTypeScreen from '../screens/SpellTypeScreen';
import SpellList from '../screens/SpellList';
import IndividualSpell from '../screens/IndividualSpell';
import ElixirDifficultyScreen from '../screens/ElixirDifficultyScreen';
import ElixirList from '../screens/ElixirList';
import IndividualElixir from '../screens/IndividualElixir';
import Search from '../screens/Search';
import NotesList from '../screens/NotesList';
import NotesInput from '../screens/NotesInput';
import IndividualNote from '../screens/IndividualNote';
import IngredientList from '../screens/IngredientList';
import IndividualIngredient from '../screens/IndividualIngredient';
import Houses from '../screens/Houses';
import HouseDetails from '../components/HouseDetails';
import AppNav from './AppNav';


const Stack = createNativeStackNavigator();

export default function MainNav() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Welcome'>
                <Stack.Screen name='Welcome' component={WelcomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name='ContentPage' component={ContentPage} options={{ animation: 'fade', headerShown: false }} />
                <Stack.Screen name='SpellTypes' component={SpellTypeScreen} options={{ animation: 'fade', headerShown: false }} />
                <Stack.Screen name='SpellList' component={SpellList} options={{ animation: 'fade', headerShown: false }} />
                <Stack.Screen name='IndividualSpell' component={IndividualSpell} options={{ animation: 'fade', headerShown: false }} />
                <Stack.Screen name='ElixirDifficulty' component={ElixirDifficultyScreen} options={{ animation: 'fade', headerShown: false }} />
                <Stack.Screen name='ElixirList' component={ElixirList} options={{ animation: 'fade', headerShown: false }} />
                <Stack.Screen name='IndividualElixir' component={IndividualElixir} options={{ animation: 'fade', headerShown: false }} />
                <Stack.Screen name='Search' component={Search} options={{ animation: 'fade', headerTintColor: 'black', headerTitleStyle: { fontFamily: 'CroissantOne', fontWeight: 'bold' } }} />
                <Stack.Screen name='NotesList' component={NotesList} options={{ animation: 'fade', headerShown: false }} />
                <Stack.Screen name='NotesInput' component={NotesInput} options={{ title: '', headerTintColor: 'black' }} />
                <Stack.Screen name='IndividualNote' component={IndividualNote} options={{ animation: 'fade', headerShown: false }} />
                <Stack.Screen name='IngredientList' component={IngredientList} options={{ animation: 'fade', headerShown: false }} />
                <Stack.Screen name='IndividualIngredient' component={IndividualIngredient} options={{ animation: 'fade', headerShown: false }} />
                <Stack.Screen name='Houses' component={Houses} options={{ animation: 'fade', headerShown: false }} />
                <Stack.Screen name='HouseDetails' component={HouseDetails} options={{ animation:'fade_from_bottom', headerShown: false }} />
                <Stack.Screen name='AppNav' component={AppNav} options={{ animation:'fade', headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}