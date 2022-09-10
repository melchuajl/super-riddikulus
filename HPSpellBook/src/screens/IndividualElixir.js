import API from "../../API";
import { useEffect, useState } from "react";
import { View, StatusBar, Text, ImageBackground, TouchableOpacity, Image, FlatList } from 'react-native';
import styles from "../styles/Stylesheet";
import elixirsBg from "../../assets/elixirs/elixirsBg.png";
import elixirsInnerBg from "../../assets/elixirs/elixirsInnerBg.png";
import smoke from '../../assets/smoke.gif';
import { useRoute } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';
import uuid from 'react-native-uuid';
import TabNav from "../components/TabNav";

const IndividualElixir = (props) => {

    const navigation = useNavigation();
    const [elixirList, setElixirList] = useState([]);
    const [elixirDifficulty, setElixirDifficulty] = useState('');
    const elixirTypeDisplay = props.elixirDifficulty;

    const getElixirList = async () => {
        const { status, data } = await API.get('/Elixirs');
        const elixirList = data.filter(e => e.ingredients[0]) // Filters out elixirs with ingredients = []
        if (status === 200) {
            setElixirList(elixirList)
        }
    }

    const route = useRoute();
    elixirList.sort((a, b) => a.name.localeCompare(b.name));  // Sorting in alphabetical order 
    const filteredElixir = elixirList.filter(elixir => elixir.name === route.params.name)

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
                source={elixirsBg}
                style={styles.elixirsbg}>
                <Image source={smoke}
                    style={styles.smoke} />
                <Image source={elixirsInnerBg}
                    style={styles.elixirInnerBg} />

                {/* Header */}
                <View style={styles.elixirHeader}>
                    <Text style={styles.headerText}>{route.params.elixirDifficulty}&nbsp;ELIXIRS</Text>
                </View>

                {/* ElixirList */}
                <View style={styles.elixirList}>
                    <FlatList
                        showsVerticalScrollIndicator={true}
                        data={filteredList}
                        renderItem={({ item }) => { return <ElixirListItem title={item.name} /> }}
                        keyExtractor={item => uuid.v4()}
                        numColumns={1}>
                    </FlatList>
                </View>

                {/* ElixirIngredients */}
                <View style={styles.elixirScroll}>
                    <Text style={styles.elixirText1}>{filteredElixir[0] ? 'Name:' : 'Select elixir from list'}
                        <Text style={{ fontSize: 15 }}>&nbsp;{filteredElixir[0] ? filteredElixir[0].name : null}</Text>
                    </Text>
                    <Text style={styles.elixirText}>{filteredElixir[0] ? 'Effect:' : null}
                        <Text style={{ fontSize: 15 }}>&nbsp;{filteredElixir[0] ? (filteredElixir[0].effect ? filteredElixir[0].effect : 'Unknown') : null}{"\n"}</Text>
                    </Text>
                    <Text style={styles.elixirText}>{filteredElixir[0] ? 'Side Effects:' : null}
                        <Text style={{ fontSize: 15 }}>&nbsp;{filteredElixir[0] ? (filteredElixir[0].sideEffects ? filteredElixir[0].sideEffects : 'Unknown') : null}</Text>
                    </Text>
                    <Text style={styles.elixirText}>{filteredElixir[0] ? 'Characteristics:' : null}
                        <Text style={{ fontSize: 15 }}>&nbsp;{filteredElixir[0] ? (filteredElixir[0].characteristics ? filteredElixir[0].characteristics : 'Unknown') : null}{"\n"}</Text>
                    </Text>
                    <Text style={styles.elixirText}>{filteredElixir[0] ? 'INGREDIENTS:' : null}
                    </Text>
                    <FlatList
                        showsVerticalScrollIndicator={true}
                        data={filteredElixir[0]?.ingredients}
                        renderItem={({ item }) => { return <IngredientItem title={item.name} /> }}
                        keyExtractor={item => uuid.v4()}>
                    </FlatList>
                </View>

                <TabNav />

            </ImageBackground>
        </View>
    );
}

export default IndividualElixir; 
