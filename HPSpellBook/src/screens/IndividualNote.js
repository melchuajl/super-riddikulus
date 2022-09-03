import mongoAPI from "../../config/mongoAPI";
import { useEffect, useState } from "react";
import { View, StatusBar, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { useRoute } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from "../styles/Stylesheet";
import detailsBg from "../../assets/individualSpellBG.png";
import spellScroll from "../../assets/kraftpaper.png";
import disco from '../../assets/circle2.gif';

const IndividualNote = () => {

    const navigation = useNavigation();
    const [notesList, setNotesList] = useState([]);

    const getNotesList = async () => {
        const { status, data } = await mongoAPI.get('/note');
        const notesList = data.data;

        if (status === 200) {
            setNotesList(notesList);
        }
    }

    const route = useRoute();
    const filteredNote = notesList.filter(n => n._id === route.params.id);

    useEffect(() => {
        getNotesList();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" />
            <ImageBackground
                source={detailsBg}
                resizeMode="cover"
                style={styles.image}>
                <Image source={disco}
                    style={styles.disco} />
                <Image source={spellScroll}
                    style={styles.spellScroll} />
                <View style={styles.box}>
                    <Text style={styles.magicText}>{filteredNote[0] ? filteredNote[0].title : null}</Text>
                </View>
                <View style={styles.scroll}>
                    <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                        <TouchableOpacity
                            style={{ marginHorizontal: 5 }}
                            onPress={() => { }}>
                            <Icon name='edit' size={20} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => { }}>
                            <Icon name='delete' size={20} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.text}>
                        {filteredNote[0] ? filteredNote[0].body : null}
                    </Text>
                </View>
                <View style={styles.return}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <Text style={styles.magicText2}>&#8592; Return to list</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

export default IndividualNote; 