import React from 'react';
import API from "../../API";
import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ImageBackground, Image, FlatList } from 'react-native';
import styles from "../styles/FarhanStyle";
import backgroundImg from '../../assets/bgImage1.png';
import categorybar1 from '../../assets/categorybar1.png'
import dividerImg from '../../assets/Divider.png';
import uuid from 'react-native-uuid';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from "@react-navigation/native";


const SpellList = (props) => {
    const route = useRoute();
    const navigation = useNavigation();
    const spellTypeDisplay = props.spellType;
    const [spellList, setSpellList] = useState([]);
    const [spellType, setSpellType] = useState('');

    const getSpellList = async () => {
        const { status, data } = await API.get('/Spells');
        const spellList = data;

        if (status === 200) {
            setSpellList(spellList);

        }
    }

    console.log('spellType 1', spellType);
    spellList.sort((a, b) => a.name.localeCompare(b.name));  // Sorting in alphabetical order 

    const filteredList = spellList.filter(spell => {
        return spell.type === spellType || spell.type === spellType[0] || spell.type === spellType[1] || spell.type === spellType[2] || spell.type === spellType[3]
    })

    useEffect(() => {
        getSpellList();
        setSpellType(route.params ? route.params.spellType : spellType);

    }, [spellTypeDisplay]);

    if (spellType === "CounterSpell") {
        setSpellType(['CounterSpell', 'CounterJinx', 'CounterCharm', 'Untransfiguration']) 
     }   

    console.log('spellType 2', spellType);
    const Item = ({ title }) => (
        <View style={styles.item}>
            <TouchableOpacity style={styles.title} onPress={() => { navigation.navigate('IndividualSpell', { name: title }) }}>
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
                    source={categorybar1}
                    resizeMode="cover"
                    style={styles.bar}>
                    <View style={styles.divider}></View>
                    <View style={styles.divider2}></View>
                    <Text style={styles.header}>{route.params.spellType}</Text>
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
                        keyExtractor={item => /* item.id */ uuid.v4()}
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

export default SpellList; 