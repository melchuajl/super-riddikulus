import mongoAPI from '../../config/mongoAPI';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState, useContext } from "react";
import { View, Text, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from "../styles/Stylesheet";
import noteslistBg from '../../assets/notes/noteslistBg.png';
import userProfileBar from '../../assets/notes/userProfileBar.png';
import blackbar from '../../assets/notes/blackbar.png';
import wizardGirl from '../../assets/notes/wizardGirl.png';
import wizardBoy from '../../assets/notes/wizardBoy.png';
import houseGry from '../../assets/registration/HouseGry.png'
import houseHuf from '../../assets/registration/HouseHuf.png'
import houseRav from '../../assets/registration/HouseRav.png'
import houseSly from '../../assets/registration/HouseSly.png'
import notesBG from '../../assets/notes/notesBG.png';
import NoteCard from '../components/NoteCard';
import TabNav from '../components/TabNav';
import { AuthContext } from '../contexts/AuthContext';

const NotesList = () => {

    const navigation = useNavigation();
    const { logout, userToken } = useContext(AuthContext);
    const [notesList, setNotesList] = useState([]);
    const [userInfo, setUserInfo] = useState({
        id: null,
        name: null,
        email: null,
        gender: null,
        house: null
    })

    const getUserInfo = async () => {
        const res = await AsyncStorage.getItem('userInfo');
        const user = JSON.parse(res);
        setUserInfo({
            id: user.data.id,
            name: user.data.name,
            email: user.data.email,
            gender: user.data.gender,
            house: user.data.house
        })
    }

    const getNotesList = async () => {
        const { status, data } = await mongoAPI.get('/note', {
            headers: {
                'Authorization': `Bearer ${userToken}`
            }
        });
        const notesList = data.data.filter(n => n.userId === userInfo.id);
        const sortedNotesList = notesList.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)); // sorts note list based on most recently updated

        if (status === 200) {
            setNotesList(sortedNotesList);
        }
    }

    useEffect(() => {
        getUserInfo();
        getNotesList();
    }, [notesList]);

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

                {/* <TouchableOpacity
                    style={styles.userBar}
                    onPress={() => { logout() }}>
                    <Text style={styles.logout}>
                        Logout
                    </Text>
                </TouchableOpacity> */}

                <ImageBackground
                    style={styles.blackbar}
                    source={blackbar}>
                    <Text style={styles.profileName}>{userInfo.name}</Text>
                    <Text style={styles.profileEmail}>{userInfo.email}</Text>
                </ImageBackground>

                <Text style={styles.notesheader}>Notes List</Text>

                <ImageBackground
                    source={noteslistBg}
                    style={styles.noteslist}>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('NotesInput') }}>
                        <Text style={[styles.addNoteText, { left: 115, margin: 15 }]}>
                            + Add note
                        </Text>
                    </TouchableOpacity>
                    <ScrollView style={{ marginBottom: 5 }} indicatorStyle='black'>
                        {notesList[0] ?
                            notesList.map(n =>
                                <NoteCard
                                    key={n._id}
                                    title={n.title}
                                    date={n.updatedAt}
                                    preview={n.body}
                                    id={n._id}
                                />)
                            :
                            <Text style={[styles.search, { textAlign: 'center' }]}>Add your first note</Text>
                        }
                    </ScrollView>
                </ImageBackground>

                <Image
                    style={styles.wizardGender}
                    source={userInfo.gender === 'male' ? wizardBoy : wizardGirl} />
                <Image
                    style={styles.wizardHouse}
                    source={userInfo.house === 'gryffindor' ? houseGry
                        : userInfo.house === 'hufflepuff' ? houseHuf
                            : userInfo.house === 'slytherin' ? houseSly
                                : houseRav} />

                <TabNav />

            </ImageBackground>
        </View>
    );

}

export default NotesList; 