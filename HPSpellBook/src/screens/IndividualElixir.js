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


const IndividualElixir = (props) => {

    const navigation = useNavigation();
    const [elixirList, setElixirList] = useState([]);
    const [elixirDifficulty, setElixirDifficulty] = useState('');
    const elixirTypeDisplay = props.elixirDifficulty;

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

    const filteredList = elixirList.filter(elixir => {
        return elixir.difficulty === elixirDifficulty
    })

    useEffect(() => {
        getElixirList();
        setElixirDifficulty(route.params ? route.params.elixirDifficulty : elixirDifficulty);

    }, [elixirTypeDisplay]);

    const ElixirListItem = ({ title }) => (
        <View style={styles.itemElixirList}>
            <TouchableOpacity style={styles.title} onPress={() => { navigation.navigate('IndividualElixir', { name: title }) }}>
                <Text style={styles.magicText3}>{title}</Text>
            </TouchableOpacity>
        </View>
    );

    const IngredientItem = ({ title }) => (
        <View style={styles.itemIngredient}>
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

                {/* Header */}
                <View style={styles.elixirHeader}>
                    <Text style={styles.headerText}>{route.params.elixirDifficulty}&nbsp;ELIXIRS</Text>
                </View>

                {/* ElixirList */}
                <View style={styles.elixirFlat}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={filteredList}
                        renderItem={({ item }) => { return <ElixirListItem title={item.name} /> }}
                        keyExtractor={item => uuid.v4()}
                        numColumns={1}>
                    </FlatList>
                </View>

                {/* ElixirIngredients */}
                <View style={styles.scroll}>
                    <Text style={styles.elixirText1}>Name:
                        <Text style={{ fontSize: 15 }}>&nbsp;{filteredElixir[0] ? filteredElixir[0].name : ''}</Text>
                    </Text>
                    <Text style={styles.elixirText}>Effect:
                        <Text style={{ fontSize: 15 }}>&nbsp;{filteredElixir[0] && filteredElixir[0].effect ? filteredElixir[0].effect : ''}{"\n"}</Text>
                    </Text>
                    <Text style={styles.elixirText}>Side Effects:
                        <Text style={{ fontSize: 15 }}>&nbsp;{filteredElixir[0] && filteredElixir[0].sideEffects ? filteredElixir[0].sideEffects : ''}</Text>
                    </Text>
                    <Text style={styles.elixirText}>Characteristics:
                        <Text style={{ fontSize: 15 }}>&nbsp;{filteredElixir[0] && filteredElixir[0].characteristics ? filteredElixir[0].characteristics : ''}{"\n"}</Text>
                    </Text>
                    <Text style={styles.elixirText}>Ingredients:
                    </Text>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={filteredElixir[0]?.ingredients}
                        renderItem={({ item }) => { return <IngredientItem title={item.name} /> }}
                        keyExtractor={item => uuid.v4()}
                        numColumns={2}>
                    </FlatList>
                </View>

            </ImageBackground>
        </View>
    );
}

export default IndividualElixir; 
