import React from 'react';
import mongoAPI from '../../config/mongoAPI';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState, useLayoutEffect, useContext } from "react";
import { View, Text, TouchableOpacity, ImageBackground, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, Alert, ScrollView } from 'react-native';
import styles from "../styles/Stylesheet";
import notesBG from '../../assets/notes/notesBG.png';
import blackbar from '../../assets/notes/blackbar.png';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from "@react-navigation/native";
import { AuthContext } from '../contexts/AuthContext';
import TabNav from '../components/TabNav';

const NotesInput = () => {

    const route = useRoute();
    const navigation = useNavigation();
    const { userToken } = useContext(AuthContext);

    const [noteTitle, setNoteTitle] = useState(route.params ? route.params.title : '');
    const [noteBody, setNoteBody] = useState(route.params ? route.params.body : '');
    const [userId, setUserId] = useState('')
    const [note, setNote] = useState({});

    const getUserId = async () => {
        const res = await AsyncStorage.getItem('userInfo');
        const user = JSON.parse(res);
        const id = user.data.id;
        setUserId(id);
    }

    useEffect(() => {
        getUserId();
        const prepare = () => {
            setNote(() => ({
                userId: userId,
                title: noteTitle,
                body: noteBody
            }));
        };
        prepare();
    }, [noteTitle, noteBody]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTransparent: true
        })
    }, [])

    const handleAddNote = async () => {
        try {
            const res = await mongoAPI.post('/note', note, {
                headers: {
                    'Authorization': `Bearer ${userToken}`
                }
            });
            if (res) {
                Alert.alert("Success!", "You've added a new note", [
                    {
                        text: "OK",
                        onPress: () => { setNoteTitle(''), setNoteBody(''), navigation.navigate('NotesList') }
                    }
                ]);
            }
        } catch (error) {
            console.error(error)
        }
    }

    const handleEditNote = async () => {
        try {
            const res = await mongoAPI.patch(`/note/${route.params.id}`, note, {
                headers: {
                    'Authorization': `Bearer ${userToken}`
                }
            });
            if (res) {
                Alert.alert("Saved!", "Your note has been edited", [
                    {
                        text: "OK",
                        onPress: () => { navigation.goBack() }
                    }
                ]);
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ImageBackground
                    source={notesBG}
                    style={styles.bg}>
                    <ImageBackground
                        style={[styles.blackbar, { top: '8%' }]}
                        source={blackbar}>
                        <Text style={styles.profileName}>Add New Note</Text>
                    </ImageBackground>
                    <View style={{ alignItems: 'center', width: "85%" }}>
                        <TextInput
                            style={[styles.inputNote, { height: 40 }]}
                            placeholder='Title'
                            clearButtonMode='while-editing'
                            selectionColor='black'
                            onChangeText={input => setNoteTitle(input)}
                            value={noteTitle}
                        />
                        <TextInput
                            style={[styles.inputNote, { fontSize: 15, height: 427 }]}
                            placeholder='Start typing your note'
                            multiline
                            selectionColor='black'
                            onChangeText={input => setNoteBody(input)}
                            value={noteBody}
                        />
                        <TouchableOpacity
                            style={styles.addNoteButton}
                            onPress={() => route.params ? handleEditNote() : handleAddNote()}>
                            <Text style={[styles.addNoteText, { margin: 5 }]}>
                                Save
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <TabNav />
                </ImageBackground>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );

}

export default NotesInput; 