import API from '../../API';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { SafeAreaView, Text, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
    }, []);

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerSearchBarOptions: {
                placeholder: "Search",
                onChangeText: (event) => searchFilterFunction(event.nativeEvent.text),
                onClear: (event) => searchFilterFunction(''),
                value: search
            }
        })
    }, [navigation])

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

    // const getItem = (event) => {
    //     console.log(event._dispatchInstances._debugOwner.child.memoizedProps.children);
    //     const name = event._dispatchInstances._debugOwner.child.memoizedProps.children;
    //     const item = data.filter(spell => spell.name === name);
    //     alert('Effect : ' + item.effect + "\n" + 'Incantation : ' + item.incantation);
    // };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                {filteredData.map((item, index) => {
                    return (
                        <View key={index}>
                            <Text
                                style={{ fontSize: 18, marginTop: 10, marginLeft: 20 }}
                                onPress={() => navigation.navigate('TTS')}>
                                {item.name}
                            </Text>
                        </View>
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    );
};

export default Search; 