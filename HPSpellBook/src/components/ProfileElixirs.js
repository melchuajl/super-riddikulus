import mongoAPI from '../../config/mongoAPI';
import { View, Text, TouchableOpacity, ImageBackground, FlatList, Image } from "react-native";
import { useEffect, useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/Stylesheet";
import elixirslistBg from '../../assets/profile/profileElixirsBg.png';
import savedElixir from '../../assets/profile/savedElixir.png';
import { AuthContext } from '../contexts/AuthContext';


const ProfileElixirs = (props) => {

    const navigation = useNavigation();
    const { userToken } = useContext(AuthContext);
    const [bookmarkedElixrs, setBookmarkedElixrs] = useState([]);

    const getBookmarkedElixrs = async () => {
        const { status, data } = await mongoAPI.get('/user/profile', {
            headers: {
                'Authorization': `Bearer ${userToken}`
            }
        });
        const bookmarked = data.data.elixirs;

        if (status === 200) {
            setBookmarkedElixrs(bookmarked)
        }
    }

    useEffect(() => {
        getBookmarkedElixrs();
        console.log(bookmarkedElixrs)
    }, []);

    const Item = ({ title }) => (
        <View style={{ width: 300, height: 90, marginHorizontal: 20 }}>
            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={() => { navigation.navigate('IndividualElixir', { name: title.name, elixirDifficulty: title.difficulty }) }}>
                <Image source={savedElixir} />
                <Text style={styles.bookmarkedItemsProfile}>&nbsp; &nbsp; {title.name}</Text>
            </TouchableOpacity>
        </View>
    );

    return (<>
        <ImageBackground
            source={elixirslistBg}
            style={styles.noteslist}>
            <View style={{ marginHorizontal: 10, marginVertical: 35, top: 40 }} indicatorStyle='black'>
                {bookmarkedElixrs[0] ?
                    <FlatList
                        showsVerticalScrollIndicator={true}
                        data={bookmarkedElixrs}
                        renderItem={({ item }) => { return <Item title={item} /> }}
                        keyExtractor={item => item.id}>
                    </FlatList>
                    :
                    <Text style={[styles.search, { textAlign: 'center' }]}>No bookmarked elixirs</Text>
                }
            </View>
        </ImageBackground>
    </>)
}

export default ProfileElixirs;