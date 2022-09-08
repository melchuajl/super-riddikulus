import { useNavigation } from "@react-navigation/native"
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import styles from "../styles/Stylesheet";
import ContentBG from "../../assets/ContentBG.png";
import WhiteGlow from "../../assets/whiteglow.png";
import Icon from 'react-native-vector-icons/AntDesign'; //can switch between different designs based on which folder


const ContentPage = () => {

    const navigation = useNavigation();

    return (
        <View>
            <ImageBackground
                style={styles.bg}
                source={ContentBG}
            >

                {/* Houses */}
                <TouchableOpacity
                    onPress={() => {
                        // Temporary put as elixirdfficulty till Houses completed
                        navigation.navigate('ElixirDifficulty')
                    }}
                >
                    <Icon
                        name="caretright"
                        size={30}
                        // color="red"
                        style={styles.caret}
                    />
                    <ImageBackground
                        source={WhiteGlow}
                        style={styles.contentButton}
                    >
                        <Text style={styles.contentButtonText}>HOUSES</Text>
                    </ImageBackground>
                </TouchableOpacity>

                {/* Spells */}
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('SpellTypes')
                    }}
                >
                    <ImageBackground
                        source={WhiteGlow}
                        style={styles.contentButton}>
                        <Text style={styles.contentButtonText}>SPELLS</Text>
                    </ImageBackground>
                </TouchableOpacity>

                {/* Elixir */}
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('ElixirDifficulty')
                    }}
                >
                    <ImageBackground
                        source={WhiteGlow}
                        style={styles.contentButton}>
                        <Text style={styles.contentButtonText}>ELIXIRS</Text>
                    </ImageBackground>
                </TouchableOpacity>

                {/* Ingredient */}
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('IngredientList')
                    }}
                >
                    <ImageBackground
                        source={WhiteGlow}
                        style={styles.contentButton}>
                        <Text style={styles.contentButtonText}>INGREDIENTS</Text>
                    </ImageBackground>
                </TouchableOpacity>

                {/* Testing ICONS */}
                <Text>
                    <Icon name="caretright" size={20} color="black" />
                </Text>

            </ImageBackground>
        </View>
    )
}

export default ContentPage;