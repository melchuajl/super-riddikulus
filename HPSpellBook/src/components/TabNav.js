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
        <Image source={tabBg} style={{ position: 'absolute', bottom: -45 }} />
        <Image source={buttonGlow} style={{ position: 'absolute', top: 680, left: 244 }} />
        <View style={{ flexDirection: 'row' , position: 'absolute', bottom: 0}}>
            <Pressable onPress={() => { }}>
                <Image source={homeIcon} style={{ left: -55 }}/>
            </Pressable>
            <Pressable onPress={() => { }}>
                <Image source={searchIcon} />
            </Pressable>
            <Pressable onPress={() => {navigation.navigate('NotesList') }}>
                <Image source={bookIcon} style={{ left: 66, bottom: 10 }}/>
            </Pressable>
        </View>
    </>)

}

export default TabNav; 