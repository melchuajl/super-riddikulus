import { useState } from "react";
import { View } from 'react-native';
import ElixirDifficulty from "./ElixirDifficulty";

const ElixirDifficultyScreen = () => {

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

export default ElixirDifficultyScreen; 