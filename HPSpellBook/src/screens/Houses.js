import API from "../../API";
import { useEffect, useState, useRef } from "react";
import { View, Text, Image, ImageBackground, Modal, StatusBar, Animated, ScrollView, Pressable, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from "../styles/Stylesheet";
import bgBar from "../../assets/categorybar.png";
import bgImage from "../../assets/houses/housesBg.png";
import HouseDetails from "../components/HouseDetails";
import TabNav from "../components/TabNav";

const flags = [
    { house: "Gryffindor", image: require("../../assets/houses/flagGryffindor.png") },
    { house: "Hufflepuff", image: require("../../assets/houses/flagHufflepuff.png") },
    { house: "Slytherin", image: require("../../assets/houses/flagSlytherin.png") },
    { house: "Ravenclaw", image: require("../../assets/houses/flagRavenclaw.png") }
];

const Houses = () => {

    const navigation = useNavigation();

    const [houseList, setHouseList] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    const getHouses = async () => {
        const { status, data } = await API.get('/Houses');
        const houseList = data;

        if (status === 200) {
            setHouseList(houseList);
        }
    }

    useEffect(() => {
        getHouses();
    }, [modalVisible])

    const scrollX = useRef(new Animated.Value(0)).current;
    const { width: windowWidth } = useWindowDimensions();

    return (
        <View>
            <StatusBar barStyle="light-content" />
            <ImageBackground
                style={styles.bg}
                source={bgImage}>

                <ImageBackground
                    source={bgBar}
                    style={[styles.housesHeader, styles.barTypes]}>
                    <Text style={styles.textTypes}>HOGWARTS HOUSES</Text>
                </ImageBackground>

                {/* <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.container}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Hello World!</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Hide Modal</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal> */}

                <ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false }
                    )}
                    scrollEventThrottle={16}
                    decelerationRate={'normal'}
                    snapToAlignment='center'>
                    {flags.map((flag, flagIndex) => {
                        return (
                            <Pressable
                                style={{ width: windowWidth }}
                                key={flagIndex}
                                onPress={() => { navigation.navigate('HouseDetails', { name: flag.house }) }}
                            >
                                <View style={styles.flagContainer}>
                                    <Image source={flag.image} />
                                </View>
                            </Pressable>
                        );
                    })}
                </ScrollView>

                <View style={styles.scrollContainer}>
                    {flags.map((image, imageIndex) => {
                        const width = scrollX.interpolate({
                            inputRange: [
                                windowWidth * (imageIndex - 1),
                                windowWidth * imageIndex,
                                windowWidth * (imageIndex + 1)
                            ],
                            outputRange: [8, 16, 8],
                            extrapolate: "clamp"
                        });
                        return (
                            <Animated.View
                                key={imageIndex}
                                style={[styles.scrollDot, { width }]}
                            />
                        );
                    })}
                </View>

                <TabNav />

            </ImageBackground>
        </View>
    );
}

export default Houses; 