import { Dimensions, StyleSheet,} from "react-native";
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg: {
        alignItems: 'center', 
        justifyContent:'center',
        height: windowHeight,
        resizeMode: 'contain'
    },
    bar: { 
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: 211,
        height: 39,
        margin: 18
    },
    text: {
        color: 'white',
        fontFamily: 'CroissantOne',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 23,
    }, 
    search: {
        fontFamily: 'CroissantOne', 
        fontSize: 16, 
        padding: 5,
        color: '#3d3d3d'
    }
});

export default styles;