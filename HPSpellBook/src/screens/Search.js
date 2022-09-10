import API from '../../API';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { SafeAreaView, Text, View, ScrollView, ImageBackground, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/Stylesheet';
import backgroundImg from '../../assets/bgImage1.png';
import TabNav from '../components/TabNav';

const Search = () => {

    const navigation = useNavigation();
    const [search, setSearch] = useState([]);
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    const getSpells = async () => {
        const { status, data } = await API.get('/Spells');
        const sortedSpells = data.sort((a, b) => a.name.localeCompare(b.name));  // Sorting in alphabetical order
        const validSpells = sortedSpells.filter(spell => spell.effect[0]) // Filters out spells with effect = [] 
        if (status === 200) {
            setFilteredData(validSpells);
            setData(validSpells);
        }
    }

    useEffect(() => {
        getSpells();
    }, []);

    const searchFilterFunction = (text) => {
        if (text) {
            const newData = data.filter((item) => {
                const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredData(newData);
            setSearch(text)
        } else {
            setFilteredData(data);
            setSearch(text)
        }
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTransparent: true,
            headerSearchBarOptions: {
                obscureBackground: false,
                barTintColor: 'rgba(225, 225, 225, 0.7)',
                hintTextColor: 'black',
                placeholder: 'Search',
                onChangeText: (event) => searchFilterFunction(event.nativeEvent.text),
                onClear: () => searchFilterFunction(''),
                value: search
            }
        })
    }, [search])

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <ImageBackground
                source={backgroundImg}
                style={styles.bg}>
                <SafeAreaView>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <ScrollView style={{ marginBottom: 70 }}>
                            {filteredData.map((item, index) => {
                                return (
                                    <View key={index} style={{ width: 350 }}>
                                        <Text
                                            style={[styles.magicText3, { marginLeft: '15%', marginVertical: 10 }]}
                                            onPress={() => navigation.navigate('IndividualSpell', { name: item.name })}>
                                            {item.name}
                                        </Text>
                                    </View>
                                )
                            })}
                        </ScrollView>
                    </TouchableWithoutFeedback>
                </SafeAreaView>

                <TabNav />

            </ImageBackground>
        </KeyboardAvoidingView>
    );
};

export default Search; 