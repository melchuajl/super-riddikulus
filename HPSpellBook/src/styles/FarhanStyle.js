import { Dimensions, StyleSheet,} from "react-native";


const win = Dimensions.get('window');
const ratio = win.height/844

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

    image: {
        flex: 1,
        justifyContent: 'center',
        width: 390,
        height: 844,
    },

    divider: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        width: '120%',
        marginBottom: 2,
    },

    divider2: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        width: '120%',
        marginBottom: 10,
    },

    divider3: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        width: '120%',
        marginTop: 10,
    },

    divider4: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        width: '120%',
        marginTop: 2,
    },

    bar: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: "center",
        width: 211,
        height: 39,
        left: 89,
        top: 82,
    },

    header: {
        fontWeight: '400',
        fontSize: 16,
        color: '#FFFFFF',
        justifyContent: "center", 
        alignItems: "center",
        lineHeight: 23,
        textTransform: 'uppercase',
        fontFamily: "CroissantOne",
    },

    listContainer: {
        position: 'absolute',
        left: 48,
        top: 159,
        width: 278,
        height: 561
    },

    listContainer2: {
        position: 'absolute',
        left: 48,
        top: 159,
        width: 500,
        height: 561,
    },

    list: {
        marginTop: 5,
       
    },
    
    dividerImg: {
        position:'absolute',
        left: 192,
        top: 140,
    },

    item: {
        padding: 2,
        marginVertical: 5,
        marginHorizontal: 20,
        height: 60,
        width: 111,
      },

    text: {
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 21,
        color: '#000000',
        marginTop: 15,
        fontFamily: "CroissantOne",
        letterSpacing: -0.3
      },

    box: {
        justifyContent: "center", 
        alignItems: "center",
        border: '2px solid #533007',
        backgroundColor: '#7D490C',
        position: 'absolute',
        height: 36,
        width: 331,
        left: 29,
        top: 135,
    },

    scroll: {
        position: 'absolute',
        height: 273,
        width: 311,
        left: 39,
        top: 200,
        
    },

    return: {
        position: 'absolute',
        height: 36,
        width: 113,
        left: 25,
        top: 523,
        justifyContent: "center", 
        alignItems: "center",
        borderColor: '#533007',
        borderWidth: 2,
        backgroundColor: '#7D490C',
    },

    return2: {
        position: 'absolute',
        height: 29,
        width: 180,
        left: 105,
        top: 751,
        justifyContent: "center", 
        alignItems: "center",
/*         borderColor: '#FFFFFF', */
        borderWidth: 1,
        fontFamily: "CroissantOne",
    },

    magicText: {
        color: '#FDEA85',
        fontSize: 18,
        fontFamily: "CroissantOne",
    },

    magicText2: {
        color: '#FDEA85',
        fontSize: 12,
        fontFamily: "CroissantOne"
    },

    magicText3: {
        color: '#000000',
        fontSize: 14,
        lineHeight: 17,
        letterSpacing: -0.3,
        fontFamily: "CroissantOne"
    },

    welcomeText: {
        position: 'absolute',
        top: 681,
        left: 110,
        height: 304,
        width: 800,
        fontFamily: "CroissantOne",
    },
    
    disco: {
        position: 'absolute',
        width: 90,
        height: 70,
        top: 45,
        left: 150,
    }, 

    spellScroll: {
        position: 'absolute', 
        top: 108,
        left: 10
    }

});

export default styles; 