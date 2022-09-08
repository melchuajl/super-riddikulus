import mongoAPI from '../../config/mongoAPI';
import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import uuid from 'react-native-uuid';

import styles from "../styles/Stylesheet";
import backgroundImg from '../../assets/bgImage1.png';
import categorybar from '../../assets/categorybar.png';
import NoteCard from '../components/NoteCard';

const NotesList = (props) => {

    const route = useRoute();
    const navigation = useNavigation();

    const [notesList, setNotesList] = useState([]);

    const getNotesList = async () => {
        const { status, data } = await mongoAPI.get('/note');
        const notesList = data.data;
        const sortedNotesList = notesList.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)); // sorts note list so that most updated is on top

        if (status === 200) {
            setNotesList(sortedNotesList);
        }
    }

    useEffect(() => {
        getNotesList();
    }, [notesList]);

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

                    <TouchableOpacity
                        onPress={() => { navigation.navigate('NotesInput') }}>
                        <Text style={[styles.search, { marginLeft: -30 }]}>
                            <Icon name='add-circle' size={15} /> Add note
                        </Text>
                    </TouchableOpacity>

                    <ScrollView>
                        {notesList.map(n =>
                            <NoteCard
                                key={uuid.v4()}
                                title={n.title}
                                date={n.updatedAt}
                                preview={n.body}
                                id={n._id}
                            />)}
                    </ScrollView>
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