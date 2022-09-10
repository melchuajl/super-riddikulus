import {View, Text, ActivityIndicator} from 'react-native';
import React, {useContext} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Houses from '../screens/Houses';
import { AuthContext } from '../context/AuthContext';
import NotesList from '../screens/NotesList';


const Stack = createNativeStackNavigator();

const AppStack = () => {

    const {isLoading, userToken} = useContext(AuthContext);

    if ( isLoading ) {
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <ActivityIndicator size={'large'} />
        </View>
    }

    return (
        
        <>
            <NotesList />
        </>
    )
}

export default AppStack