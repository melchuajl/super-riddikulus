import API from "../../API";
import { useEffect, useState } from "react";
import { View, StatusBar, Text, ImageBackground, TouchableOpacity, Image, FlatList} from 'react-native';
import styles from "../styles/FarhanStyle";
import detailsBg from "../../assets/individualSpellBG.png";
import spellScroll from "../../assets/kraftpaper.png";
import disco from '../../assets/circle2.gif';
import { useRoute } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';
import uuid from 'react-native-uuid';


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
        <View style={styles.item}>
            <TouchableOpacity style={styles.title} onPress={() => { navigation.navigate('IndividualElixir', { name: title }) }}>
                <Text style={styles.magicText3}>{title}</Text>
            </TouchableOpacity>
        </View>
    );

    return (

        <View style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" />
            <ImageBackground
                source={detailsBg}
                resizeMode="cover"
                style={styles.image}>
                <Image source={disco}
                    style={styles.disco} />
                <Image source={spellScroll}
                    style={styles.spellScroll} />
                <View style={styles.box}>
                    <Text style={styles.magicText}>{filteredIngredient[0] ? filteredIngredient[0].name : 'Nil'}</Text>
                </View>
                <View style={styles.scroll}>
                    <Text style={styles.text}>Type:
                        <Text style={{ fontSize: 17 }}>{"\n"}{filteredIngredient[0] ? filteredIngredient[0].name : 'Nil'}</Text>
                    </Text>
                    <Text style={styles.text}>Used In:</Text>
                    <View>
                <FlatList
                        showsVerticalScrollIndicator={false}
                        data={filteredElixir}
                        renderItem={({ item }) => { return <Item title={item.name} /> }}
                        keyExtractor={item => uuid.v4()}
                        numColumns={1}>
                    </FlatList>
                </View>
                </View>
                <View style={styles.return}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <Text style={styles.magicText2}>&#8592; Return to list</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
        
    );
}

export default IndividualIngredient; 