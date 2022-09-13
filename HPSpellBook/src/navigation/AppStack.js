import { View, ActivityIndicator } from 'react-native';
import { useContext } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthContext } from '../contexts/AuthContext';
import NotesList from '../screens/NotesList';


const Stack = createNativeStackNavigator();

const AppStack = () => {

    const { isLoading } = useContext(AuthContext);

    if (isLoading) {
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size={'large'} />
        </View>
    }

    return (
        <Stack.Navigator initialRouteName='NotesList'>
            <Stack.Screen name='NotesList' component={NotesList} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default AppStack; 