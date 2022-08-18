import API from "../../API";
import { useEffect, useState } from "react";
import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import styles from "../styles/FarhanStyle";
import detailsBg from "../../assets/individualSpellBG.png";
import spellScroll from "../../assets/kraftpaper.png";
import disco from '../../assets/circle3.gif';
import { useFonts } from 'expo-font';
import { useRoute } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';
import TTS from "./TTS";


const IndividualSpell = (props) => {

    const navigation = useNavigation();
    const [fontsLoaded] = useFonts({
        'CroissantOne': require('../../assets/fonts/CroissantOne.ttf'),
    });
    const [spellList, setSpellList] = useState([]);
    const uniqueSpellName = props.uniqueSpell;

    const getSpellList = async () => {
        const { status, data } = await API.get('/Spells');
        const spellList = data;
        if (status === 200) {
            setSpellList(spellList)
        }
    }

    const route = useRoute();
    const filteredSpell = spellList.filter(spell => spell.name === route.params.name)

    useEffect(() => {
        getSpellList();
    }, []);

    console.log('spellName', uniqueSpellName)

    if (!fontsLoaded) {
        return null;
    }


    return (
        <View style={styles.container}>
            <ImageBackground
                source={detailsBg}
                resizeMode="cover"
                style={styles.image}>
                <Image source={disco}
                    style={styles.disco} />
                <Image source={spellScroll}
                    style={styles.spellScroll} />
                <View style={styles.box}>
                    <Text style={styles.magicText}>{filteredSpell[0] ? filteredSpell[0].name : 'Nil'}</Text>
                </View>
                <View style={styles.scroll}>
                    <Text style={styles.text}>Type :{"\n"}{filteredSpell[0] ? filteredSpell[0].type : 'Nil'}</Text>
                    <Text style={styles.text}>Effect :{"\n"}{filteredSpell[0] ? filteredSpell[0].effect : 'Nil'}</Text>
                    <Text style={styles.text}>INCANTATION:{"\n"}{filteredSpell[0] ? filteredSpell[0].incantation : 'Nil'} <TTS incantation={filteredSpell[0] ? filteredSpell[0].incantation : null} /></Text>
                    <Text style={styles.text}>LIGHT: {"\n"}{filteredSpell[0] ? filteredSpell[0].light : 'Nil'}</Text>
                </View>
                <View style={styles.return}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <Text style={styles.magicText2}>Return to list</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

export default IndividualSpell; 