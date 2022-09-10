import { useNavigation } from "@react-navigation/native"
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import styles from "../styles/Stylesheet";
import ContentBG from "../../assets/ContentBG.png";
import WhiteGlow from "../../assets/whiteglow.png";
import Icon from 'react-native-vector-icons/MaterialIcons'; //can switch between different designs based on which folder
import TabNav from "../components/TabNav";

const ContentPage = () => {

    const navigation = useNavigation();

    return (
        <View>
            <ImageBackground
                style={styles.bg}
                source={ContentBG}
            >

                {/* Houses */}
                <ImageBackground
                    source={WhiteGlow}
                    style={styles.contentButton}
                >
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Houses')
                        }}
                    >
                        <View style={styles.caret}>
                            <Text style={styles.contentButtonText}>HOUSES</Text>
                            <Icon name="play-arrow" size={30} />
                        </View>
                    </TouchableOpacity>

                </ImageBackground>

                {/* Spells */}
                <ImageBackground
                    source={WhiteGlow}
                    style={styles.contentButton}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('SpellTypes')
                        }}
                    >
                        <View style={styles.caret}>
                            <Text style={styles.contentButtonText}>SPELLS</Text>
                            <Icon name="play-arrow" size={30} />
                        </View>
                    </TouchableOpacity>

                </ImageBackground>

                {/* Elixir */}
                <ImageBackground
                    source={WhiteGlow}
                    style={styles.contentButton}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('ElixirDifficulty')
                        }}
                    >
                        <View style={styles.caret}>
                            <Text style={styles.contentButtonText}>ELIXIRS</Text>
                            <Icon name="play-arrow" size={30} />
                        </View>
                    </TouchableOpacity>
                </ImageBackground>

                {/* Ingredient */}
                <ImageBackground
                    source={WhiteGlow}
                    style={styles.contentButton}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('IngredientList')
                        }}
                    >
                        <View style={styles.caret}>
                            <Text style={styles.contentButtonText}>INGREDIENTS</Text>
                            <Icon name="play-arrow" size={30} />
                        </View>
                    </TouchableOpacity>
                </ImageBackground>

                <TabNav />

            </ImageBackground>
        </View >
    )
}

export default ContentPage;