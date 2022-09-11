import React, {useRef, useEffect, useState, useContext} from "react";
import { View, TouchableOpacity, ImageBackground, Image, Text, Animated, TextInput, Alert } from 'react-native';
import styles from '../styles/Stylesheet';
import bgImage from '../../assets/bgImage1.png';
import books from '../../assets/books.png';
import blueLight from '../../assets/blueLightning.png';
import whiteGlow from '../../assets/whiteglow.png';
import loginBar from '../../assets/loginBar.png'
import { useNavigation } from '@react-navigation/native';
import mongoAPI from "../../config/mongoAPI";
import { AuthContext } from "../contexts/AuthContext";
import TabNav from "../components/TabNav";

const Login = () => {

    const {login} = useContext(AuthContext)


/*     const [username, setUsername] = useState(null); */
    const [email, setEmail] = useState(null);
    const [hiddenEmail, setHiddenEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [details, setDetails] = useState({});
    const navigation = useNavigation();

    useEffect(() => {

        const prepare = () => {
            email ? setHiddenEmail(email.toLowerCase()) : null ;

            setDetails(() => ({
                email: hiddenEmail,
                password: password,
            }));
        };
        prepare();
    }, [email, password]);


    return (
        <View>
            <ImageBackground
                source={bgImage}
                style={styles.bg}> 

                <Image
                    source= {books}
                    style={styles.books}>
                </Image>

                <Image 
                    source= {blueLight}
                    style={styles.blueLight}>
                </Image>

                <View style = {styles.inputBox}>
                    <ImageBackground
                        source = {loginBar}
                        style = {styles.loginBar}>
                            <TextInput 
                            placeholder = 'Email'
                            value = {email}
                            onChangeText = {setEmail}
                            style={styles.inputLogin}></TextInput>
                        </ImageBackground>
                        
                        <ImageBackground
                        source = {loginBar}
                        style = {styles.loginBar}>
                            <TextInput 
                            placeholder = 'Password'
                            value = {password}
                            secureTextEntry
                            onChangeText = {setPassword}
                            style={styles.inputLogin}></TextInput>
                        </ImageBackground>

                        <View style= {styles.register}>
                        <Text style={styles.regLogin}>Don't have an account?</Text>
                        <TouchableOpacity
                            onPress ={() => {navigation.navigate('Registration')}}
                            >
                                <Text style={[styles.regLogin, {color:'#642210', left:2}]}>Register</Text>
                            </TouchableOpacity> 
                        </View>
                        
                            </View>
                            <ImageBackground
                            source = {whiteGlow}
                            style = {styles.loginGlow}>
                            <TouchableOpacity
                            onPress = {() => {login(details)}}>
                                <Text style={styles.loginText}>Login</Text>
                            </TouchableOpacity>
                        </ImageBackground>
                            <TabNav />
                            
            </ImageBackground>
        </View>
    );
}

export default Login; 