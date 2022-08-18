import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';

import styles from "../styles/Stylesheet";
import bgBar from "../../assets/categorybar.png";
import bgImage from "../../assets/bgImage.png";

const SpellTypes = (props) => {

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
                    onPress={() => click.setSpellType('Transfiguration')}>
                    <ImageBackground
                        source={bgBar}
                        style={styles.bar1}>
                        <Text style={styles.text}>TRANSFIGURATION</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => click.setSpellType('Charm')}>
                    <ImageBackground
                        source={bgBar}
                        style={styles.bar2}>
                        <Text style={styles.text}>CHARM</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => click.setSpellType('Jinx')}>
                    <ImageBackground
                        source={bgBar}
                        style={styles.bar3}>
                        <Text style={styles.text}>JINX</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => click.setSpellType('Hex')}>
                    <ImageBackground
                        source={bgBar}
                        style={styles.bar4}>
                        <Text style={styles.text}>HEX</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => click.setSpellType('Counter Spell')}>
                    <ImageBackground
                        source={bgBar}
                        style={styles.bar5}>
                        <Text style={styles.text}>COUNTER-SPELL</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => click.setSpellType('Healing Spell')}>
                    <ImageBackground
                        source={bgBar}
                        style={styles.bar6}>
                        <Text style={styles.text}>HEALING SPELL</Text>
                    </ImageBackground>
                </TouchableOpacity>

            </ImageBackground>
        </View>
    );
}

export default SpellTypes; 