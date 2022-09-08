import API from "../../API";
import { useEffect, useState } from "react";
import { View, Text, StatusBar, ImageBackground, FlatList, Image, Modal, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

import styles from "../styles/Stylesheet";
import bgImage from "../../assets/houses/housesBg.png";
import houseDetails from "../../assets/houses/housesDetails.png";
import TabNav from "./TabNav";

const flags = {
    Gryffindor: require("../../assets/houses/flagGryffindor.png"),
    Hufflepuff: require("../../assets/houses/flagHufflepuff.png"),
    Slytherin: require("../../assets/houses/flagSlytherin.png"),
    Ravenclaw: require("../../assets/houses/flagRavenclaw.png")
};

const HouseDetails = (props) => {

    const navigation = useNavigation();

    const [houseList, setHouseList] = useState([]);
    const [house, setHouse] = useState(null);

    const getHouses = async () => {
        const { status, data } = await API.get('/Houses');
        const houseList = data;

        if (status === 200) {
            setHouseList(houseList);
        }
    }

    useEffect(() => {
        getHouses();
        setHouse(route.params?.name);
    }, [house])

    const route = useRoute();
    const filteredHouse = houseList.filter(h => h.name === house);
    // console.log("House:", house, "Traits:", filteredHouse[0]?.traits)

    return (
        <View>
            <StatusBar barStyle="light-content" />
            <ImageBackground
                style={styles.bg}
                source={bgImage}>
                <Image
                    source={flags[house]}
                    style={{ position: 'absolute', top: -85 }} />
                <Pressable onPress={() => { navigation.goBack() }}>
                    <ImageBackground
                        source={houseDetails}
                        style={styles.houseDetails}>
                        <View style={styles.modalView}>
                            <Text style={[styles.magicText3, { lineHeight: 20, color: 'white' }]}>
                                Founder: {filteredHouse[0] ? (filteredHouse[0].founder) : null}{'\n'}
                                Head of House: {filteredHouse[0] ? (filteredHouse[0].name === 'Hufflepuff' ? (filteredHouse[0].heads[1].firstName + ' ' + filteredHouse[0].heads[1].lastName) : (filteredHouse[0].heads[0].firstName + ' ' + filteredHouse[0].heads[0].lastName)) : null}{'\n'}
                                Colors: {filteredHouse[0] ? filteredHouse[0].houseColours : null}{'\n'}
                                Animal: {filteredHouse[0] ? filteredHouse[0].animal : null}{'\n'}
                                Element: {filteredHouse[0] ? filteredHouse[0].element : null}{'\n'}
                                Ghost: {filteredHouse[0] ? filteredHouse[0].ghost : null}{'\n'}
                                Common Room: {filteredHouse[0] ? filteredHouse[0].commonRoom : null}{'\n'}
                                {'\n'}
                                Traits:
                            </Text>
                            <FlatList
                                data={filteredHouse[0]?.traits}
                                renderItem={({ item }) => {
                                    return <Text style={[styles.magicText3, { lineHeight: 20, color: 'white' }]}>
                                        &nbsp; &nbsp; &#8227; &nbsp; {item.name}
                                    </Text>
                                }}
                                keyExtractor={item => item.id}>
                            </FlatList>
                        </View>
                    </ImageBackground>
                </Pressable>

                <TabNav style={{ position: 'absolute', bottom: 0 }} />

            </ImageBackground>
        </View>
    )
}

export default HouseDetails;