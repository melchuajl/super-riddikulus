import API from "../../API";
import { useEffect, useState } from "react";
import { View, Text } from 'react-native';

const getSpellList = () => {

    const [firstSpell, setFirstSpell] = useState([]);

    const getSpellTypes = async () => {
        const { status, data } = await API.get('/Spells');
        const firstSpell = data;
        if (status === 200) {
            setFirstSpell(firstSpell);     
        }
    }

    useEffect(() => {
        getSpellTypes();
    }, []);

    return (
        <View>
            <Text style={{fontWeight:'700'}}>Spell Types</Text>
            <Text>Type: {firstSpell.type}</Text>
            <Text>Name: {firstSpell.name}</Text>
            <Text>Incantation: {firstSpell.incantation}</Text>
        </View>
    );

}

export default SpellTypes; 