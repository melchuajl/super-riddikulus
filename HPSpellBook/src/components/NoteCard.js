import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import dateFormat from 'dateformat';
import styles from "../styles/Stylesheet";

const NoteCard = (props) => {

    const navigation = useNavigation();

    return (<>
        <TouchableOpacity
            style={styles.noteCard}
            onPress={() => { navigation.navigate('IndividualNote', {id: props.id}) }}>
            <Text style={styles.noteCardTitle} numberOfLines={1}>
                {props.title}
            </Text>
            <Text style={styles.noteCardPreview} numberOfLines={2}>
                {props.preview}
            </Text>
            <Text style={styles.noteCardDate}>
                Last update: {dateFormat(props.date, "dd mmm, hh:MM TT")}
            </Text>
        </TouchableOpacity>
    </>)
}

export default NoteCard;

