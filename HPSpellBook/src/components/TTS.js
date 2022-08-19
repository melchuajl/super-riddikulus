import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Speech from 'expo-speech'

const TTS = (props) => {

    return (
        <View>
            <TouchableOpacity onPress={() => Speech.speak(props.incantation)}>
                <Icon name={props.icon} size={18} />
            </TouchableOpacity>
        </View>
    )
};

export default TTS; 