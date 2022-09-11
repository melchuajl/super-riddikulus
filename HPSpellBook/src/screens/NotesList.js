import mongoAPI from '../../config/mongoAPI';
import { useEffect, useState, useContext } from "react";
import { View, Text, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import uuid from 'react-native-uuid';

import styles from "../styles/Stylesheet";
import backgroundImg from '../../assets/bgImage1.png';
import categorybar from '../../assets/categorybar.png';
import NoteCard from '../components/NoteCard';
import TabNav from '../components/TabNav';
import { AuthContext } from '../contexts/AuthContext';

const NotesList = (props) => {

    const navigation = useNavigation();
    const {logout} = useContext(AuthContext);
    const [notesList, setNotesList] = useState([]);

    const getNotesList = async () => {
        const { status, data, headers } = await mongoAPI.get('/note');
        const notesList = data.data;
        const sortedNotesList = notesList.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)); // sorts note list based on most recently updated

        if (status === 200) {
            setNotesList(sortedNotesList);
        }
    }

    useEffect(() => {
        getNotesList();
    }, [notesList]);

    const route = useRoute();
    const userId = route.params?.userId

    return (
        <View>
            <ImageBackground
                source={backgroundImg}
                style={styles.bg}>
                <ImageBackground
                    source={categorybar}
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

                    <TouchableOpacity
                        onPress={() => {logout()}}>
                        <Text style={[styles.search, { marginLeft: -30 }]}>
                            <Icon name='add-circle' size={15} /> Sign Out
                        </Text>
                    </TouchableOpacity>

                    <ScrollView>
                        {notesList[0] ?
                            notesList.map(n =>
                                <NoteCard
                                    key={uuid.v4()}
                                    title={n.title}
                                    date={n.updatedAt}
                                    preview={n.body}
                                    id={n._id}
                                />)
                            :
                            <Text>Add your first note</Text>
                        }
                    </ScrollView>
                </View>

                <TabNav />

            </ImageBackground>
        </View>
    );

}

export default NotesList; 