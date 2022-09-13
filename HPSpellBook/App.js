import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

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