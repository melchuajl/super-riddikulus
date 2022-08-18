import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Speech from 'expo-speech'

const TTS = (props) => {

    return (
        <View>
            <TouchableOpacity onPress={() => Speech.speak(props.incantation)} >
                <Icon name="volume-up" size={20} />
            </TouchableOpacity>
        </View>
    )
};

export default TTS; 