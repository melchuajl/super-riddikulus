import { Text, TouchableOpacity } from "react-native";
import styles from "../styles/Stylesheet";

const NoteCard = (props) => {

    return (<>
        <TouchableOpacity style={styles.noteCard}>
            <Text>
                {props.title}
            </Text>
        </TouchableOpacity>
    </>)
}

export default NoteCard;

