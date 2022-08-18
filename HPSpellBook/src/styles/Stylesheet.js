import { Dimensions, StyleSheet } from "react-native";

//Trying to fix the background image to fit full screen under bg, can remove if not needed
const win = Dimensions.get('window');
const ratio = win.height/844

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg: {
        width: 390 * ratio,
        height: win.height,
        // resizeMode: 'contain',
        // justifyContent: 'center',
        alignItems: 'center',
    },
    bar1: { 
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 1,
        margin: 10,
        width: 211,
        height: 39,
        top: 150,
        left: -116
    },
    bar2: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 1,
        margin: 10,
        width: 211,
        height: 39,
        top: 200,
        left: -116
    },
    bar3: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 1,
        margin: 10,
        width: 211,
        height: 39,
        top: 250,
        left: -116
    },
    bar4: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 1,
        margin: 10,
        width: 211,
        height: 39,
        top: 300,
        left: -116
    },
    bar5: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 1,
        margin: 10,
        width: 211,
        height: 39,
        top: 350,
        left: -116
    },
    bar6: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 1,
        margin: 10,
        width: 211,
        height: 39,
        top: 400,
        left: -116
    },
    text: {
        color: 'white',
        fontFamily: 'CroissantOne',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 23,
    },
});

export default styles; 