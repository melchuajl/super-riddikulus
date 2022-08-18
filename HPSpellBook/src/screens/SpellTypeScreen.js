import { useState } from "react";
import { View } from 'react-native';
import SpellTypes from "../components/SpellTypes";

const SpellTypeScreen = () => {

    const [spellType, setSpellType] = useState([]);

    return (
        <View>
            <SpellTypes result={{
            spellType: spellType,
            setSpellType: setSpellType
            }}/>
        </View>
    );
}

export default SpellTypeScreen; 