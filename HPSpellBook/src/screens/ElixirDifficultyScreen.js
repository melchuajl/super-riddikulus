import { useState } from "react";
import { View } from 'react-native';
import ElixirDifficulty from "../components/ElixirDifficulty";

const ElixirDiffucltyScreen = () => {

    const [elixirDifficulty, setElixirDifficulty] = useState([]);

    return (
        <View>
            <ElixirDifficulty result={{
                elixirDifficulty: elixirDifficulty,
                setElixirDifficulty: setElixirDifficulty
            }} />
        </View>
    );
}

export default ElixirDiffucltyScreen; 