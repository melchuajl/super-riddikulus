import API from '../../API';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { SafeAreaView, Text, View, ScrollView, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/FarhanStyle';
import backgroundImg from '../../assets/bgImage1.png';

const Search = () => {

    const navigation = useNavigation();
    const [search, setSearch] = useState([]);
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    const getSpells = async () => {
        const { status, data } = await API.get('/Spells');
        const sortedSpells = data.sort((a, b) => a.name.localeCompare(b.name));  // Sorting in alphabetical order 
        if (status === 200) {
            setFilteredData(sortedSpells);
            setData(sortedSpells);
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
                placeholder: "Search",
                onChangeText: (event) => searchFilterFunction(event.nativeEvent.text),
                onClear: () => searchFilterFunction(''),
                value: search
            }
        })
    }, [search])

    return (
        <View style={{flex: 1}}>
            <ImageBackground
                source={backgroundImg}
                resizeMode="cover"
                style={styles.image}>
                <SafeAreaView>
                    <ScrollView style={{marginBottom: 50}}>
                        {filteredData.map((item, index) => {
                            return (
                                <View key={index}>
                                    <Text
                                        style={[styles.magicText3, {marginLeft: 75, marginVertical: 10}]}
                                        onPress={() => navigation.navigate('IndividualSpell', { name: item.name })}>
                                        {item.name}
                                    </Text>
                                </View>
                            )
                        })}
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};

export default Search; 