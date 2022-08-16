import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import * as Speech from 'expo-speech'

const TTS = (props) => {

    return (
        <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={() => Speech.speak(props.incantation)} >
                <Icon name="sound" size={30} />
            </TouchableOpacity>
        </View>
    )
};

export default TTS; 