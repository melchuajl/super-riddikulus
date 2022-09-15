import API from "../../API";
import { useEffect, useState } from "react";
import { View, StatusBar, Text, ImageBackground, TouchableOpacity, Image, FlatList } from 'react-native';
import styles from "../styles/Stylesheet";
import backgroundImg from '../../assets/ingredients/ingredientsBg.png';
import ingredientsScroll from '../../assets/ingredients/ingredientsScroll.png';
import glitter from '../../assets/ingredients/glitter.gif';
import { useRoute } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';
import uuid from 'react-native-uuid';
import TabNav from "../components/TabNav";

const IndividualIngredient = () => {

    const navigation = useNavigation();
    const [ingredientList, setIngredientList] = useState([]);
    const [elixirList, setElixirList] = useState([]);

    const getIngredientList = async () => {
        const { status, data } = await API.get('/Ingredients');
        const ingredientList = data;

        if (status === 200) {
            setIngredientList(ingredientList);

        }
    }

    const getElixirList = async () => {
        const { status, data } = await API.get('/Elixirs');
        const elixirList = data;

        if (status === 200) {
            setElixirList(elixirList);

        }
    }

    useEffect(() => {
        getIngredientList();
        getElixirList();
    }, []);

    const route = useRoute();

    const filteredElixir = elixirList.filter(eachVal => {
        let opt = eachVal.ingredients.some(e => e.name === route.params.name);
        return opt;
    });


    const filteredIngredient = ingredientList.filter(ingredient => ingredient.name === route.params.name)


    const Item = ({ title }) => (
        <View style={[styles.item, { height: 36 }]}>
            <TouchableOpacity style={styles.title} onPress={() => { navigation.navigate('IndividualElixir', { name: title.name, elixirDifficulty: title.difficulty }) }}>
                <Text style={styles.magicText4}>&#8227; {title.name}</Text>
            </TouchableOpacity>
        </View>
    );

    return (

        <View style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" />
            <ImageBackground
                source={backgroundImg}
                style={styles.bg}>
                <Image source={glitter}
                    style={styles.glitter} />
                <Image source={ingredientsScroll}
                    style={styles.ingredientsScroll} />
                <View style={styles.scroll}>
                    <Text style={[styles.magicText, styles.ingredientName]}>INGREDIENT:
                        <Text>{"\n"}{filteredIngredient[0] ? filteredIngredient[0].name : null}</Text>
                    </Text>
                    <Text style={[styles.magicText, { color: '#FFFFFF', top: 80, left: 30 }]}>USED IN:</Text>
                    <View style={{ height: 240, top: 90, left: 8 }}>
                        <FlatList
                            showsVerticalScrollIndicator={true}
                            data={filteredElixir}
                            renderItem={({ item }) => { return <Item title={item} /> }}
                            keyExtractor={item => uuid.v4()}>
                        </FlatList>
                    </View>
                </View>

                <TabNav />

            </ImageBackground>
        </View>

    );
}

export default IndividualIngredient; 