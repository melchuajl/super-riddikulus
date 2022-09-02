import mongoAPI from '../../config/mongoAPI';
import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ImageBackground, Image, FlatList, TextInput, Button, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from "@react-navigation/native";

import styles from "../styles/Stylesheet";
import backgroundImg from '../../assets/bgImage1.png';
import categorybar from '../../assets/categorybar.png';
import NoteCard from '../components/NoteCard';

const NotesList = (props) => {

    const route = useRoute();
    const navigation = useNavigation();

    const [notesList, setNotesList] = useState([]);

    const getSpellList = async () => {
        const { status, data } = await mongoAPI.get('/note');
        const notesList = data.data;

        if (status === 200) {
            setNotesList(notesList);
        }
    }

    useEffect(() => {
        getSpellList();
    }, []);

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
                    <Text style={styles.header}>Notes List</Text>
                    <View style={styles.divider3}></View>
                    <View style={styles.divider4}></View>
                </ImageBackground>
                <View style={styles.noteContainer}>
                    <Text>
                        {notesList.map(n => `Title: ${n.title} \nBody: ${n.body} \n`)}
                    </Text>
                    <NoteCard />
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

export default NotesList; 