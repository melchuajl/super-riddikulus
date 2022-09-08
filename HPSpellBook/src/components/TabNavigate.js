import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from '../screens/WelcomeScreen';
import ContentPage from '../screens/ContentPage';

const TabNavigate = () => {

    const Tab = createBottomTabNavigator();

    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Welcome" component={WelcomeScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabNavigate();

