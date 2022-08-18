import { View, TouchableOpacity, ImageBackground, Text } from 'react-native';
import styles from '../styles/FarhanStyle';
import welcome from '../../assets/welcomeImage.png'
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

const WelcomeScreen = () => {

    const navigation = useNavigation();
    const [fontsLoaded] = useFonts({
        'CroissantOne': require('../../assets/fonts/CroissantOne.ttf'),
    });
    if (!fontsLoaded) {
        return null;
    }
    return (
        <View>
            <ImageBackground
                source={welcome}
                style={styles.image}>
                <TouchableOpacity
                    onPress={() => { navigation.navigate('SpellTypes') }}
                    hitSlop={{ top: 1000, bottom: 1000, left: 1000, right: 1000 }}>
                    <Text style={styles.welcomeText}>Tap Anywhere To Begin</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

export default WelcomeScreen; 