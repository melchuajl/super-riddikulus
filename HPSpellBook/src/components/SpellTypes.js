import API from "../../API";
import { useEffect, useState } from "react";
import { View, Text } from 'react-native';

const SpellTypes = () => {

    const [firstSpell, setFirstSpell] = useState([]);

    const getSpellTypes = async () => {
        const { status, data } = await API.get('/Spells');
        const firstSpell = data[0];
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
            <Text>Type: {JSON.stringify(firstSpell.type)}</Text>
            <Text>Name: {JSON.stringify(firstSpell.name)}</Text>
            <Text>Incantation: {JSON.stringify(firstSpell.incantation)}</Text>
        </View>
    );

}

export default SpellTypes; 