import API from "../../API";
import { useEffect, useState } from "react";
import { View, Text, ScrollView } from 'react-native';
import uuid from 'react-native-uuid';

const SpellTypes = () => {

    const [spellList, setSpellList] = useState([]);

    const getSpellList = async () => {
        const { status, data } = await API.get('/Spells');
        const spellList = data;

        if (status === 200) {
            setSpellList(spellList);     
        }
    }

    useEffect(() => {
        getSpellList();
    }, []);

    return (
        <View>
            <ScrollView >
                {spellList.filter(spell => spell.type === 'Curse').map(filteredSpell => (
                        <ScrollView key = {uuid.v4()}>
                        <Text>{filteredSpell.name}</Text>
                        </ScrollView>
                ))  
                }
            </ScrollView>
        </View>
    );

}

export default SpellTypes; 