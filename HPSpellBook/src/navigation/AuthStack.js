import {View, Text, ActivityIndicator} from 'react-native';
import React, {useContext} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import WelcomeScreen from '../screens/WelcomeScreen';
import Login from '../screens/Login';
import { AuthContext } from '../context/AuthContext';
import Registration from '../screens/Registration';

const Stack = createNativeStackNavigator();

const AuthStack = () => {

    const {isLoading, userToken} = useContext(AuthContext);

    if ( isLoading ) {
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <ActivityIndicator size={'large'} />
        </View>
    }

    return (
        
        
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
            <Stack.Screen name='Registration' component={Registration} options={{ headerShown: false }} />
        </Stack.Navigator>
        
    )
}

export default AuthStack