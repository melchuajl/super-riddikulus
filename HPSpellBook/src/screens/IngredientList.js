import React from 'react';
import API from "../../API";
import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ImageBackground, FlatList } from 'react-native';
import styles from "../styles/Stylesheet";
import backgroundImg from '../../assets/ingredients/ingredientsBg.png';
import ingredientsScroll from '../../assets/ingredients/ingredientsScroll.png';
import uuid from 'react-native-uuid';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from "@react-navigation/native";
import TabNav from '../components/TabNav';


const IngredientList = (props) => {
    const route = useRoute();
    const navigation = useNavigation();
    const spellTypeDisplay = props.spellType;
    const [ingredientList, setIngredientList] = useState([]);

    const getIngredientList = async () => {
        const { status, data } = await API.get('/Ingredients');
        const ingredientList = data;

        if (status === 200) {
            setIngredientList(ingredientList);

        }
    }

    ingredientList.sort((a, b) => a.name.localeCompare(b.name));  // Sorting in alphabetical order 

    useEffect(() => {
        getIngredientList();

    }, []);

    const Item = ({ title }) => (
        <View style={[styles.item, { height: 19, width: 220 }]}>
            <TouchableOpacity style={styles.title} onPress={() => { navigation.navigate('IndividualIngredient', { name: title }) }}>
                <Text style={[styles.magicText3, { color: '#FFFFFF' }]}>&nbsp; &#8226; &nbsp; {title}</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View>
            <ImageBackground
                source={backgroundImg}
                style={styles.bg}>
                <Text style={styles.ingredientsHeader}>Ingredients</Text>
                <ImageBackground
                source={ingredientsScroll}
                style={styles.ingredientsScroll}>
                <View style={styles.ingredientsList}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={ingredientList}
                        renderItem={({ item }) => { return <Item title={item.name} /> }}
                        keyExtractor={item => uuid.v4()}>
                    </FlatList>
                </View>
                </ImageBackground>

                <TabNav />

            </ImageBackground>
        </View>

    );

}

export default IngredientList; 