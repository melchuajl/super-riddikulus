import React, { useRef, useEffect, useState } from "react";
import { View, TouchableOpacity, ImageBackground, Text, Image, TextInput, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from '../styles/Stylesheet';
import imageBg from '../../assets/bgImage1.png'
import registerImg from '../../assets/registration/Register.png'
import registerFemale from '../../assets/registration/registerFemale.png'
import registerMale from '../../assets/registration/registerMale.png'
import whiteGlow from '../../assets/whiteglow.png'
import loginBar from '../../assets/loginBar.png'
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import mongoAPI from "../../config/mongoAPI";
import TabNav from "../components/TabNav";

const Registration = () => {


    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [hiddenEmail, setHiddenEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [details, setDetails] = useState({});
    const [passwordRepeat, setPasswordRepeat] = useState(null);
    const navigation = useNavigation();

    const registerOnPress = async () => {
        const emailCheck = /\S+@\S+\.\S+/;

        if (!username) {
            Alert.alert('Please input a name');
            return;
        } else if (!emailCheck.test(email)) {
            Alert.alert('Invalid email address');
            return;
        } else if (!password || password.search(/[A-Z]/) < 0 || password.search(/[0-9]/) < 0 || password.search(/[a-z]/) < 0 || password.length < 8) {
            Alert.alert('Password needs to have : a lowercase and uppercase letter, a number and longer than 7 characters')
            return;
        } else if (passwordRepeat !== password) {
            Alert.alert('Passwords do not match!');
            return;
        }

        try {

            const res = await mongoAPI.post('/user', details);
            if (res) {
                Alert.alert(`New student ${username}, welcome!`
                )
                navigation.navigate('Login');
                console.log(`details: email - ${hiddenEmail}, name - ${username}`)
            }
        } catch (error) {
            alert(JSON.stringify(error.response.data.message))
        }
    }

    useEffect(() => {
        const prepare = () => {
            email ? setHiddenEmail(email.toLowerCase()) : null;
            setDetails(() => ({
                username: username,
                email: hiddenEmail,
                password: password,
            }));
        };
        prepare();
    }, [username, password]);


    return (
        <View>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ImageBackground
                    source={imageBg}
                    style={styles.bg}>
                    <View style={styles.bar2}>
                        <View style={[styles.divider, { borderBottomColor: '#642210', width: '100%' }]}></View>
                        <View style={[styles.divider2, { borderBottomColor: '#642210', width: '100%' }]}></View>
                        <Image
                            style={styles.registerHeader}
                            source={registerImg}>
                        </Image>
                        <View style={[styles.divider3, { borderBottomColor: '#642210', width: '100%' }]}></View>
                        <View style={[styles.divider4, { borderBottomColor: '#642210', width: '100%' }]}></View>
                    </View>

                    <ImageBackground
                        source={loginBar}
                        style={[styles.loginBar, { marginTop: -100 }]}>
                        <TextInput
                            placeholder='Name'
                            value={username}
                            onChangeText={setUsername}
                            style={styles.inputLogin}></TextInput>
                    </ImageBackground>

                    <Text style={[styles.inputLogin, { left: -102, opacity: 0.4, top: 1 }]}>Gender</Text>
                    <View style={{ flexDirection: 'row', height: 101, width: 500, marginBottom: 4 }}>

                        {/* <TouchableOpacity  */}

                        <Image
                            source={registerMale}
                            style={{ left: 108 + 35, width: 70, }}></Image>
                        {/* </TouchableOpacity> */}
                        <Image
                            source={registerFemale}
                            style={{ left: 212, width: 70 }}></Image>
                    </View>



                    <ImageBackground
                        source={loginBar}
                        style={styles.loginBar}>
                        <TextInput
                            placeholder='Email'
                            value={email}
                            onChangeText={setEmail}
                            style={styles.inputLogin}></TextInput>
                    </ImageBackground>

                    <ImageBackground
                        source={loginBar}
                        style={styles.loginBar}>
                        <TextInput
                            placeholder='Password'
                            value={password}
                            secureTextEntry
                            onChangeText={setPassword}
                            style={styles.inputLogin}></TextInput>
                    </ImageBackground>

                    <ImageBackground
                        source={loginBar}
                        style={styles.loginBar}>
                        <TextInput
                            placeholder='Confirm password'
                            value={passwordRepeat}
                            secureTextEntry
                            onChangeText={setPasswordRepeat}
                            style={styles.inputLogin}></TextInput>
                    </ImageBackground>
                    <View style={{ flexDirection: 'row', marginTop: 14, left: 25 }}>
                        <Text style={[styles.regLogin,]}>Already a member?</Text>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate('Login') }}
                        >
                            <Text style={[styles.regLogin, { color: '#642210', left: 2 }]}>Back to login page</Text>
                        </TouchableOpacity>
                    </View>

                    <ImageBackground
                        source={whiteGlow}
                        style={styles.registerGlow}>
                        <TouchableOpacity
                            onPress={registerOnPress}
                            hitSlop={{ top: 20, bottom: 30, left: 10, right: 10 }}>
                            <Text style={styles.loginText}>Sign Up</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                    <TabNav />
                </ImageBackground>
            </TouchableWithoutFeedback>
        </View>
    );
}

export default Registration; 