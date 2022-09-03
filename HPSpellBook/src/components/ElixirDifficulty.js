import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import bgBar from "../../assets/categorybar.png";
import backgroundImg from '../../assets/bgImage1.png';
import { useNavigation } from '@react-navigation/native';
import styles from "../styles/Stylesheet";
import { useFonts } from 'expo-font';


const ElixirDifficulty = (props) => {

    const navigation = useNavigation();

    const click = props.result;

    //Added font in because keep error while testing
    const [fontsLoaded] = useFonts({
        'CroissantOne': require('../../assets/fonts/CroissantOne.ttf'),
    });
        if (!fontsLoaded) {
            return null;
        }

    return (
        <View>
            <ImageBackground
                style={styles.bg}
                source={backgroundImg}
            >
                <TouchableOpacity
                    onPress={() => {
                        click.setElixirDifficulty('Beginner');
                        navigation.navigate('ElixirList', { elixirDifficulty: 'Beginner' })
                    }}
                >
                    <ImageBackground
                        source={bgBar}
                        style={styles.bar}>
                        <Text style={styles.text}>BEGINNER</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        click.setElixirDifficulty('Moderate');
                        navigation.navigate('ElixirList', { elixirDifficulty: 'Moderate' })
                    }}
                >
                    <ImageBackground
                        source={bgBar}
                        style={styles.bar}>
                        <Text style={styles.text}>MODERATE</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        click.setElixirDifficulty('Advanced');
                        navigation.navigate('ElixirList', { elixirDifficulty: 'Advanced' })
                    }}
                >
                    <ImageBackground
                        source={bgBar}
                        style={styles.bar}>
                        <Text style={styles.text}>ADVANCED</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

export default ElixirDifficulty;