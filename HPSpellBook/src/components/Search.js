import API from '../../API';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { SafeAreaView, Text, View, ScrollView, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/FarhanStyle';
import backgroundImg from '../../assets/bgImage1.png';

const Search = () => {

    const [search, setSearch] = useState([]);
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    const getSpells = async () => {
        const { status, data } = await API.get('/Spells');
        if (status === 200) {
            setFilteredData(data);
            setData(data);
        }
    }

    useEffect(() => {
        getSpells();
    }, [navigation]);

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTransparent: true,
            headerSearchBarOptions: {
                placeholder: "Search",
                onChangeText: (event) => searchFilterFunction(event.nativeEvent.text),
                onClear: (event) => searchFilterFunction(''),
                value: search
            }
        })
    }, [])

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

    return (
        <View style={{flex: 1}}>
            <ImageBackground
                source={backgroundImg}
                resizeMode="cover"
                style={styles.image}>
                <SafeAreaView>
                    <ScrollView>
                        {filteredData.map((item, index) => {
                            return (
                                <View key={index}>
                                    <Text
                                        style={[styles.magicText3, {marginLeft: 40, marginVertical: 10}]}
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