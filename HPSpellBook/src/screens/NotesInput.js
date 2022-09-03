
import React from 'react';
import mongoAPI from '../../config/mongoAPI';
import { useEffect, useState, useLayoutEffect } from "react";
import { View, Text, TouchableOpacity, ImageBackground, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, Alert, ScrollView } from 'react-native';
import styles from "../styles/Stylesheet";
import backgroundImg from '../../assets/bgImage1.png';
import categorybar from '../../assets/categorybar.png'
import { useNavigation } from '@react-navigation/native';
import { useRoute } from "@react-navigation/native";

const NotesInput = () => {

    const route = useRoute();
    const navigation = useNavigation();

    const [noteTitle, setNoteTitle] = useState('');
    const [noteBody, setNoteBody] = useState('');
    const [note, setNote] = useState({});

    // const getSpellList = async () => {
    //     const { status, data } = await mongoAPI.get('/note');
    //     const notesList = data.data;

    //     if (status === 200) {
    //         setNotesList(notesList);
    //     }
    // }

    useEffect(() => {
        const prepare = () => {
            setNote(() => ({
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
            const res = await mongoAPI.post('/note', note);
            if (res) {
                Alert.alert("Success!", "You've added a new note", [
                    {
                        text: "OK",
                        onPress: () => { setNoteTitle(''), setNoteBody('') }
                    },
                    {
                        text: "View notes",
                        onPress: () => { navigation.navigate('NotesList') }
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
                    source={backgroundImg}
                    resizeMode="cover"
                    style={styles.image}>
                    <ImageBackground
                        source={categorybar}
                        resizeMode="cover"
                        style={styles.bar}>
                        <View style={styles.divider}></View>
                        <View style={styles.divider2}></View>
                        <Text style={styles.header}>Add New Note</Text>
                        <View style={styles.divider3}></View>
                        <View style={styles.divider4}></View>
                    </ImageBackground>
                    <View style={[styles.noteContainer, { width: "85%", marginLeft: 12 }]}>
                        <TextInput
                            style={[styles.inputNote, { height: 40 }]}
                            placeholder='Title'
                            clearButtonMode='while-editing'
                            selectionColor='black'
                            onChangeText={input => setNoteTitle(input)}
                            value={noteTitle}
                        />
                        <TextInput
                            style={[styles.inputNote, { height: "80%" }]}
                            placeholder='Body'
                            multiline
                            selectionColor='black'
                            onChangeText={input => setNoteBody(input)}
                            value={noteBody}
                        />
                        <TouchableOpacity
                            style={styles.addNote}
                            onPress={() => handleAddNote()}>
                            <Text style={styles.magicText3}>
                                + Add note
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );

}

export default NotesInput; 