import mongoAPI from '../../config/mongoAPI';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState, useContext } from "react";
import { View, Text, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/FontAwesome5'
import uuid from 'react-native-uuid';
import noteslistBg from '../../assets/notes/noteslistBg.png';
import userProfileBar from '../../assets/notes/userProfileBar.png';
import blackbar from '../../assets/notes/blackbar.png';
import wizardGirl from '../../assets/notes/wizardGirl.png';

import styles from "../styles/Stylesheet";
import notesBG from '../../assets/notes/notesBG.png';
import categorybar from '../../assets/categorybar.png';
import NoteCard from '../components/NoteCard';
import TabNav from '../components/TabNav';
import { AuthContext } from '../contexts/AuthContext';

const NotesList = () => {

    const navigation = useNavigation();
    const { logout, userToken } = useContext(AuthContext);
    const [notesList, setNotesList] = useState([]);
    const [userId, setUserId] = useState('')

    const getUserId = async () => {
        const res = await AsyncStorage.getItem('userInfo');
        const user = JSON.parse(res);
        const id = user.data.id;
        setUserId(id);
    }

    const getNotesList = async () => {
        const { status, data } = await mongoAPI.get('/note', {
            headers: {
                'Authorization': `Bearer ${userToken}`
            }
        });
        const notesList = data.data.filter(n => n.userId === userId);
        const sortedNotesList = notesList.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)); // sorts note list based on most recently updated

        if (status === 200) {
            setNotesList(sortedNotesList);
        }
    }

    useEffect(() => {
        getUserId();
        getNotesList();
    }, [userId, notesList]);

    return (
        <View>

            <ImageBackground
                source={notesBG}
                style={styles.bg}>

                <ImageBackground
                    source={userProfileBar}
                    style={styles.userBar}>

                    <TouchableOpacity>
                        <Text style={styles.changePW}>
                            Change Password
                        </Text>
                    </TouchableOpacity>

                    <Text style={styles.line}>|</Text>

                    <TouchableOpacity
                        onPress={() => { logout() }}>
                        <Text style={styles.logout}>
                            Logout
                        </Text>
                    </TouchableOpacity>
                </ImageBackground>

                <ImageBackground
                    style={styles.blackbar}
                    source={blackbar}>
                    <Text style={styles.blackbarText}>Insert Name?</Text>
                    <Text style={styles.blackbarText}>Insert Email??</Text>
                </ImageBackground>

                <ImageBackground>
                    <Text style={styles.notesheader}>Notes List</Text>
                </ImageBackground>

                <View style={styles.noteContainer}>
                    <ScrollView>
                        <ImageBackground
                            source={noteslistBg}
                            style={styles.noteslist}>

                            <TouchableOpacity
                                onPress={() => { navigation.navigate('NotesInput') }}>
                                <Text style={[styles.search, { marginLeft: 110 }]}>
                                    <Icon name='add-circle' size={15} /> Add note
                                </Text>
                            </TouchableOpacity>

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
                            <View>
                                <Icons style={styles.arrows} name='arrows-alt-v' size={30} />
                            </View>
                        </ImageBackground>
                    </ScrollView>
                </View>

                <Image
                    style={styles.wizardGirl}
                    source={wizardGirl}>
                </Image>

                <TabNav />

            </ImageBackground>
        </View>
    );

}

export default NotesList; 