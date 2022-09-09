import { useNavigation } from "@react-navigation/native"
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import styles from "../styles/Stylesheet";
import ContentBG from "../../assets/ContentBG.png";
import WhiteGlow from "../../assets/whiteglow.png";
import Icon from 'react-native-vector-icons/MaterialIcons'; //can switch between different designs based on which folder


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
                    <ImageBackground
                        source={WhiteGlow}
                        style={styles.contentButton}
                    >
                        <View style={styles.caret}>
                            <Text style={styles.contentButtonText}>HOUSES</Text>
                            <Icon name="play-arrow" size={30} />
                        </View>
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
                        <View style={styles.caret}>
                            <Text style={styles.contentButtonText}>SPELLS</Text>
                            <Icon name="play-arrow" size={30} />
                        </View>
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
                        <View style={styles.caret}>
                            <Text style={styles.contentButtonText}>ELIXIRS</Text>
                            <Icon name="play-arrow" size={30} />
                        </View>
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
                        <View style={styles.caret}>
                            <Text style={styles.contentButtonText}>INGREDIENTS</Text>
                            <Icon name="play-arrow" size={30} />
                        </View>
                    </ImageBackground>
                </TouchableOpacity>

            </ImageBackground>
        </View>
    )
}

export default ContentPage;