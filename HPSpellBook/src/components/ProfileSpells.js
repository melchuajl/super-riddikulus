import mongoAPI from '../../config/mongoAPI';
import { View, Text, TouchableOpacity, ImageBackground, FlatList, Image } from "react-native";
import { useEffect, useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/Stylesheet";
import spellslistBg from '../../assets/profile/profileSpellsBg.png';
import savedSpell from '../../assets/profile/savedSpell.png';
import { AuthContext } from '../contexts/AuthContext';


const ProfileSpells = (props) => {

    const navigation = useNavigation();
    const { userToken } = useContext(AuthContext);
    const [bookmarkedSpells, setBookmarkedSpells] = useState([]);

    const getBookmarkedSpells = async () => {
        const { status, data } = await mongoAPI.get('/user/profile', {
            headers: {
                'Authorization': `Bearer ${userToken}`
            }
        });
        const bookmarked = data.data.spells;

        if (status === 200) {
            setBookmarkedSpells(bookmarked)
        }
    }

    useEffect(() => {
        getBookmarkedSpells();
    }, []);

    const Item = ({ title }) => (
        <View style={{ width: 300, height: 60, marginHorizontal: 20 }}>
            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={() => { navigation.navigate('IndividualSpell', { name: title }) }}>
                <Image source={savedSpell} />
                <Text style={styles.bookmarkedItemsProfile}>&nbsp; &nbsp; {title}</Text>
            </TouchableOpacity>
        </View>
    );

    return (<>
        <ImageBackground
            source={spellslistBg}
            style={styles.noteslist}>
            <View style={{ marginHorizontal: 10, marginVertical: 35, top: 40 }} indicatorStyle='black'>
                {bookmarkedSpells[0] ?
                    <FlatList
                        showsVerticalScrollIndicator={true}
                        data={bookmarkedSpells}
                        renderItem={({ item }) => { return <Item title={item.name} /> }}
                        keyExtractor={item => item.id}>
                    </FlatList>
                    :
                    <Text style={[styles.search, { textAlign: 'center' }]}>No bookmarked spells</Text>
                }
            </View>
        </ImageBackground>
    </>)
}

export default ProfileSpells;