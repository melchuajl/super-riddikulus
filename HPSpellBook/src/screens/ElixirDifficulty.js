import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import elixirsTag from "../../assets/elixirsTag.png";
import elixirsBg from '../../assets/elixirsBg.png';
import elixirsYellowPotion from '../../assets/elixirsYellowPotion.png'
import elixirsGreenPotion from '../../assets/elixirsGreenPotion.png'
import { useNavigation } from '@react-navigation/native';
import styles from "../styles/Stylesheet";

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
                    <Text style={styles.elixirDiffHeaderText1}>
                        E
                    </Text>
                    <Text style={styles.elixirDiffHeaderText2}>
                        LIXIRS
                    </Text>
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
            </ImageBackground>

            <Image
                source={elixirsYellowPotion}
                style={styles.yellowPotion} />
            <Image
                source={elixirsGreenPotion}
                style={styles.greenPotion} />

        </View>
    )
}

export default ElixirDifficulty;