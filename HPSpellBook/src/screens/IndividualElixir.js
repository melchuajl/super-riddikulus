import API from "../../API";
import { useEffect, useState } from "react";
import { View, StatusBar, Text, ImageBackground, TouchableOpacity, Image, FlatList } from 'react-native';
import styles from "../styles/Stylesheet";
import elixirsDetailsBg from "../../assets/elixirsDetailsBg.png";
import elixirsInnerBg from "../../assets/elixirsInnerBg.png";
import smoke from '../../assets/smoke.gif';
import { useRoute } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';
import uuid from 'react-native-uuid';


const IndividualElixir = () => {

    const navigation = useNavigation();
    const [elixirList, setElixirList] = useState([]);

    const getElixirList = async () => {
        const { status, data } = await API.get('/Elixirs');
        const elixirList = data;
        if (status === 200) {
            setElixirList(elixirList)
        }
    }

    const route = useRoute();
    const filteredElixir = elixirList.filter(elixir => elixir.name === route.params.name)

    useEffect(() => {
        getElixirList();
    }, []);

    const Item = ({ title }) => (
        <View style={styles.itemElixir}>
            <TouchableOpacity onPress={() => { navigation.navigate('IndividualIngredient', { name: title }) }}>
                <Text style={styles.magicText3}>&#8227; {title}</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" />
            <ImageBackground
                source={elixirsDetailsBg}
                resizeMode="cover"
                style={styles.image}>
                <Image source={smoke}
                    style={styles.smoke} />
                <Image source={elixirsInnerBg}
                    style={styles.elixirInnerBg} />

                <Text style={styles.elixirHeader}>{route.params.elixirDifficulty}</Text>
                
                <View style={styles.scroll}>
                    <Text style={styles.text}>Name:
                        <Text style={{ fontSize: 17 }}>&nbsp;{filteredElixir[0] ? filteredElixir[0].name : 'Nil'}</Text>
                    </Text>
                    <Text style={styles.text}>Effect:
                        <Text style={{ fontSize: 17 }}>&nbsp;{filteredElixir[0] && filteredElixir[0].effect ? filteredElixir[0].effect : 'Unknown'}</Text>
                    </Text>
                    <Text style={styles.text}>Characteristics:
                        <Text style={{ fontSize: 17 }}>&nbsp;{filteredElixir[0] && filteredElixir[0].characteristics ? filteredElixir[0].characteristics : 'Unknown'}</Text>
                    </Text>
                    <Text style={styles.text}>Side Effects:
                        <Text style={{ fontSize: 17 }}>&nbsp;{"\n"}{filteredElixir[0] && filteredElixir[0].sideEffects ? filteredElixir[0].sideEffects : 'Unknown'}</Text>
                    </Text>
                    <Text style={styles.text}>Ingredients:
                    </Text>
                    <FlatList
                        showsVerticalScrollIndicator
                        data={filteredElixir[0]?.ingredients}
                        renderItem={({ item }) => { return <Item title={item.name} /> }}
                        keyExtractor={item => uuid.v4()}
                        numColumns={2}>
                    </FlatList>
                </View>
                {/* <View style={styles.return}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <Text style={styles.magicText2}>&#8592; Return to list</Text>
                    </TouchableOpacity>
                </View> */}
            </ImageBackground>
        </View>
    );
}

export default IndividualElixir; 
