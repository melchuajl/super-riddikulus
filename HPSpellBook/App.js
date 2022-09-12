import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import WelcomeScreen from './src/screens/WelcomeScreen';
import ContentPage from './src/screens/ContentPage';
import SpellTypeScreen from './src/screens/SpellTypeScreen';
import SpellList from './src/screens/SpellList';
import IndividualSpell from './src/screens/IndividualSpell';
import Search from './src/screens/Search';
import NotesList from './src/screens/NotesList';
import NotesInput from './src/screens/NotesInput';
import IndividualNote from './src/screens/IndividualNote';
import IndividualIngredient from './src/screens/IndividualIngredient';
import IngredientList from './src/screens/IngredientList';
import ElixirDifficultyScreen from './src/screens/ElixirDifficultyScreen';
import ElixirList from './src/screens/ElixirList';
import IndividualElixir from './src/screens/IndividualElixir';
import Houses from './src/screens/Houses';
import HouseDetails from './src/components/HouseDetails'; // TEMPORARY till I can fix the Modal function T^T
import { AuthProvider } from './src/contexts/AuthContext';
import AppNav from './src/navigation/AppNav';
import MainNav from './src/navigation/MainNav';
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <AuthProvider>
            <MainNav />
        </AuthProvider>
    );
}