import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import elixirsTag from "../../assets/elixirs/elixirsTag.png";
import elixirsBg from '../../assets/elixirs/elixirsBg.png';
import elixirsYellowPotion from '../../assets/elixirs/elixirsYellowPotion.png';
import elixirsGreenPotion from '../../assets/elixirs/elixirsGreenPotion.png';
import elixirsHeader from '../../assets/elixirs/elixirsHeader.png';
import { useNavigation } from '@react-navigation/native';
import styles from "../styles/Stylesheet";
import TabNav from '../components/TabNav';

const ElixirDifficulty = (props) => {

    const navigation = useNavigation();

    const click = props.result;

    return (
        <View>
            <ImageBackground
                style={styles.bg}
                source={elixirsBg}
            >
                <View style={styles.elixirDiffHeader}>
                    <Image source={elixirsHeader} style={{ top: '30%' }} />
                </View>

                <TouchableOpacity
                    onPress={() => {
                        click.setElixirDifficulty('Beginner');
                        navigation.navigate('IndividualElixir', { elixirDifficulty: 'Beginner' })
                    }}
                >
                    <ImageBackground
                        source={elixirsTag}
                        style={styles.elixirBarTypes}>
                        <Text style={styles.elixirBarText}>BEGINNER</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        click.setElixirDifficulty('Moderate');
                        navigation.navigate('IndividualElixir', { elixirDifficulty: 'Moderate' })
                    }}
                >
                    <ImageBackground
                        source={elixirsTag}
                        style={styles.elixirBarTypes}>
                        <Text style={styles.elixirBarText}>MODERATE</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        click.setElixirDifficulty('Advanced');
                        navigation.navigate('IndividualElixir', { elixirDifficulty: 'Advanced' })
                    }}
                >
                    <ImageBackground
                        source={elixirsTag}
                        style={styles.elixirBarTypes}>
                        <Text style={styles.elixirBarText}>ADVANCED</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <Image
                    source={elixirsYellowPotion}
                    style={styles.yellowPotion} />
                <Image
                    source={elixirsGreenPotion}
                    style={styles.greenPotion} />

                <TabNav />

            </ImageBackground>
        </View>
    )
}

export default ElixirDifficulty;