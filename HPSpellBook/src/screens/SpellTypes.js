import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from "../styles/Stylesheet";
import bgBar from "../../assets/categorybar.png";
import bgImage from "../../assets/bgImage.png";
import { useNavigation } from '@react-navigation/native';
import TabNav from '../components/TabNav';

const SpellTypes = (props) => {

    //Navigation
    const navigation = useNavigation();

    //For parent container
    const click = props.result;

    return (
        <View>

            <ImageBackground
                style={styles.bg}
                source={bgImage}>

                <TouchableOpacity
                    style={{ marginBottom: 10 }}
                    onPress={() => navigation.navigate('Search')}>
                    <Text style={styles.search}>
                        <Icon name="book-search-outline" size={25} />
                        &nbsp;Search
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        click.setSpellType('Transfiguration');
                        navigation.navigate('SpellList', { spellType: 'Transfiguration' })
                    }}
                >
                    <ImageBackground
                        source={bgBar}
                        style={styles.barTypes}>
                        <Text style={styles.textTypes}>TRANSFIGURATION</Text>
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
                        style={styles.barTypes}>
                        <Text style={styles.textTypes}>CHARM</Text>
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
                        style={styles.barTypes}>
                        <Text style={styles.textTypes}>JINX</Text>
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
                        style={styles.barTypes}>
                        <Text style={styles.textTypes}>HEX</Text>
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
                        style={styles.barTypes}>
                        <Text style={styles.textTypes}>COUNTER-SPELL</Text>
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
                        style={styles.barTypes}>
                        <Text style={styles.textTypes}>HEALING SPELL</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TabNav /> 

            </ImageBackground>
        </View>
    );
}

export default SpellTypes; 