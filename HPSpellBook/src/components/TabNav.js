import { View, ImageBackground, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import tabBg from "../../assets/navigationtab/navigationtab.png";
import homeIcon from "../../assets/navigationtab/homeicon.png";
import backIcon from "../../assets/navigationtab/backicon.png";
import searchIcon from "../../assets/navigationtab/searchicon.png";
import bookIcon from "../../assets/navigationtab/bookicon.png";
import buttonGlow from "../../assets/navigationtab/buttonglow.png";

const TabNav = () => {

    const navigation = useNavigation();

    return (<>
        <Image source={tabBg} style={{ position: 'absolute', bottom: -45, width: '100%' }} />
        <Image source={buttonGlow} style={{ position: 'absolute', bottom: -37, right: -57 }} />
        <View style={{ flexDirection: 'row', position: 'absolute', bottom: 0 }}>
            <Pressable onPress={() => { navigation.navigate('ContentPage') }}>
                <Image source={homeIcon} style={{ left: -10 }} />
            </Pressable>
            <Pressable onPress={() => { navigation.goBack() }}>
                <Image source={backIcon} />
            </Pressable>
            <Pressable onPress={() => { navigation.navigate('Search') }}>
                <Image source={searchIcon} />
            </Pressable>
            <Pressable onPress={() => { navigation.navigate('NotesList') }}>
                <Image source={bookIcon} style={{ left: 25, bottom: 10 }} />
            </Pressable>
        </View>
    </>)

}

export default TabNav; 