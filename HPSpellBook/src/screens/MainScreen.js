import { View } from 'react-native';
import Search from '../components/Search.js';
import NativeSpeech from '../components/TTS.js';

const MainScreen = () => {

    const incantation = 'React Native is a pain in the butt'

    return (
        <View style={{ flex: 1 }}>
            <NativeSpeech incantation={incantation}/>
            <Search />
        </View>
    );
}

export default MainScreen; 