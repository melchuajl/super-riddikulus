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


const ElixirList = (props) => {
    const route = useRoute();
    const navigation = useNavigation();
    const elixirTypeDisplay = props.elixirDifficulty;
    const [elixirList, setElixirList] = useState([]);
    const [elixirDifficulty, setElixirDifficulty] = useState('');

    const getElixirList = async () => {
        const { status, data } = await API.get('/Elixirs');
        const elixirList = data.filter(e => e.ingredients[0]) // Filters out elixirs with ingredients = []

        if (status === 200) {
            setElixirList(elixirList);
        }
    }

    elixirList.sort((a, b) => a.name.localeCompare(b.name));  // Sorting in alphabetical order 

    const filteredList = elixirList.filter(elixir => {
        return elixir.difficulty === elixirDifficulty})

    useEffect(() => {
        getElixirList();
        setElixirDifficulty(route.params ? route.params.elixirDifficulty : elixirDifficulty);

    }, [elixirTypeDisplay]);

    const Item = ({ title }) => (
        <View style={styles.item}>
            <TouchableOpacity style={styles.title} onPress={() => { navigation.navigate('IndividualElixir', { name: title }) }}>
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
                    <Text style={styles.header}>{route.params.elixirDifficulty}</Text>
                    <View style={styles.divider3}></View>
                    <View style={styles.divider4}></View>
                </ImageBackground>
                <Image style={styles.dividerImg}
                    source={dividerImg}></Image>
                <View style={styles.listContainer}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={filteredList}
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

export default ElixirList; 