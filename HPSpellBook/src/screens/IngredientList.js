import React from 'react';
import API from "../../API";
import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ImageBackground, Image, FlatList } from 'react-native';
import styles from "../styles/Stylesheet";
import backgroundImg from '../../assets/bgImage1.png';
import categorybar from '../../assets/categorybar.png'
import dividerImg from '../../assets/Divider.png';
import uuid from 'react-native-uuid';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from "@react-navigation/native";


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
        <View style={styles.item}>
            <TouchableOpacity style={styles.title} onPress={() => { navigation.navigate('IndividualIngredient', { name: title }) }}>
                <Text style={styles.magicText3}>{title}</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View>
            <ImageBackground
                source={backgroundImg}
                resizeMode="cover"
                style={styles.image}>
                <ImageBackground
                    source={categorybar}
                    resizeMode="cover"
                    style={styles.bar}>
                    <View style={styles.divider}></View>
                    <View style={styles.divider2}></View>
                    <Text style={styles.header}>Ingredient List</Text>
                    <View style={styles.divider3}></View>
                    <View style={styles.divider4}></View>
                </ImageBackground>
                <Image style={styles.dividerImg}
                    source={dividerImg}></Image>
                <View style={styles.listContainer}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={ingredientList}
                        renderItem={({ item }) => { return <Item title={item.name} /> }}
                        keyExtractor={item => uuid.v4()}
                        numColumns={2}>
                    </FlatList>
                </View>
                <View style={styles.return2}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <Text style={styles.magicText3}>Return to previous page
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>

    );

}

export default IngredientList; 