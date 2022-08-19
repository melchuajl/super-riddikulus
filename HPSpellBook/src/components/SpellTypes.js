import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';

import styles from "../styles/Stylesheet";
import bgBar from "../../assets/categorybar.png";
import bgImage from "../../assets/bgImage.png";
import { useNavigation } from '@react-navigation/native';

const SpellTypes = (props) => {

    //Navigation
    const navigation = useNavigation();

    //For the Croissant Font
    const [fontsLoaded] = useFonts({
        'CroissantOne': require('../../assets/fonts/CroissantOne.ttf'),
    });
    if (!fontsLoaded) {
        return null;
    }

    //For parent container
    const click = props.result;

    return (
        <View>

            <ImageBackground
                style={styles.bg}
                source={bgImage}>

                <TouchableOpacity
                    onPress={() => {
                        click.setSpellType('Transfiguration');
                        navigation.navigate('SpellList', { spellType: 'Transfiguration' })
                    }}
                >
                    <ImageBackground
                        source={bgBar}
                        style={styles.bar}>
                        <Text style={styles.text}>TRANSFIGURATION</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        click.setSpellType('Charm');
                        navigation.navigate('SpellList', { spellType: 'Charm' })
                    }}
                >
                    <ImageBackground
                        source={bgBar}
                        style={styles.bar}>
                        <Text style={styles.text}>CHARM</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        click.setSpellType('Jinx');
                        navigation.navigate('SpellList', { spellType: 'Jinx' })
                    }}
                >
                    <ImageBackground
                        source={bgBar}
                        style={styles.bar}>
                        <Text style={styles.text}>JINX</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        click.setSpellType('Hex');
                        navigation.navigate('SpellList', { spellType: 'Hex' })
                    }}
                >
                    <ImageBackground
                        source={bgBar}
                        style={styles.bar}>
                        <Text style={styles.text}>HEX</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        click.setSpellType('CounterSpell');
                        navigation.navigate('SpellList', { spellType: 'CounterSpell' })
                    }}
                >
                    <ImageBackground
                        source={bgBar}
                        style={styles.bar}>
                        <Text style={styles.text}>COUNTER-SPELL</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        click.setSpellType('HealingSpell');
                        navigation.navigate('SpellList', { spellType: 'HealingSpell' })
                    }}
                >
                    <ImageBackground
                        source={bgBar}
                        style={styles.bar}>
                        <Text style={styles.text}>HEALING SPELL</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Search')}
                >
                    <ImageBackground
                        source={bgBar}
                        style={styles.bar}>
                        <Text style={styles.text}>SEARCH</Text>
                    </ImageBackground>
                </TouchableOpacity>

            </ImageBackground>
        </View>
    );
}

export default SpellTypes; 