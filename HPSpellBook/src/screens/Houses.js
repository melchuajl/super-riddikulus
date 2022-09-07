import API from "../../API";
import { useEffect, useState, useRef } from "react";
import { View, Text, Image, ImageBackground, StatusBar, Animated, ScrollView, Pressable, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from "../styles/Stylesheet";
import bgBar from "../../assets/categorybar.png";
import bgImage from "../../assets/houses/housesBg.png";

const flags = [
    require("../../assets/houses/flagGryffindor.png"),
    require("../../assets/houses/flagHufflepuff.png"),
    require("../../assets/houses/flagSlytherin.png"),
    require("../../assets/houses/flagRavenclaw.png")
];

const Houses = () => {

    const [houseList, setHouseList] = useState([]);

    const getHouses = async () => {
        const { status, data } = await API.get('/Houses');
        const houseList = data;

        if (status === 200) {
            setHouseList(houseList);
        }
    }

    useEffect(() => {
        getHouses();
    }, [])

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

                {/* <View style={[styles.flagContainer, { width: windowWidth }]}>
                    <Animated.FlatList
                        data={flags}
                        horizontal
                        pagingEnabled
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                            { useNativeDriver: true }
                        )}
                        scrollEventThrottle={1}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => {
                            return <Pressable onLongPress={() => { alert("You pressed me!") }}>
                                <Image source={item} />
                            </Pressable>
                        }}
                        keyExtractor={item => item}
                    />
                </View> */}

                <ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false }
                    )}
                    scrollEventThrottle={0.5}>
                    {flags.map((image, imageIndex) => {
                        return (
                            <Pressable
                                style={{ width: windowWidth }}
                                key={imageIndex}
                                onLongPress={() => alert('Pressed!')}
                            >
                                <View style={styles.flagContainer}>
                                    <Image source={image} />
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

            </ImageBackground>
        </View>
    );
}

export default Houses; 