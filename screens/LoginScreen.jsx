import React from 'react'
import { Image, ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, Pressable, TouchableOpacity, View, PixelRatio, Dimensions } from 'react-native'
import { ThirdColor, primaryColor, secondaryColor } from '../utils/colors'
import { TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import { login } from "../store/slices/userLogin"
import { useDispatch } from 'react-redux';

const LoginScreen = () => {

    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    const pixelRatio = PixelRatio.get();
    const navigation = useNavigation()
    const dispatch = useDispatch()
    // Scale a value using pixel ratio
    const scaleValue = (value) => {
        return PixelRatio.roundToNearestPixel(value * pixelRatio);
    };

    const loginstate = (userlogin) => {
        dispatch(login(userlogin))
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>

                {/* Image And Text Start */}

                <View style={styles.imageAndText}>
                    <View>
                        <Image style={{ resizeMode: "center", width: screenWidth / 4, height: screenHeight / 8.5, }}
                            source={require("../assets/golop-logo.png")} />
                    </View>

                    <View style={{ marginTop: 30 }} >
                        <Text style={{ color: primaryColor, fontWeight: "400", fontSize: pixelRatio * 7, textTransform: "capitalize" }}>Welcome back to Goollooper!
                        </Text>
                    </View>
                </View>

                {/* Image And Text Close */}


                {/* InpurFields And Text Start */}
                <View style={{ marginTop: 40 }}>

                    <View style={styles.inputfields}>

                        <View style={{ width: "90%", }}>
                            <Text style={{ color: secondaryColor, fontWeight: "500", textTransform: "capitalize", fontSize: pixelRatio * 4.5, }}>Email Address</Text>

                            <View style={{ borderBottomWidth: 0.5, borderBottomColor: 'rgba(22, 26, 29, 0.30)', flexDirection: 'row', justifyContent: "center", alignItems: "center", width: "90%" }}>
                                <TextInput placeholder='Type here' placeholderTextColor="rgba(22, 26, 29, 0.30)" style={{ width: "100%", color: "#000" }} />
                            </View>
                        </View>

                    </View>

                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 24 }}>

                        <View style={{ width: "90%", }}>
                            <Text style={{ fontSize: pixelRatio * 4.5, color: secondaryColor, fontWeight: "500", textTransform: "capitalize", }}>Password</Text>

                            <View style={{ borderBottomWidth: 0.5, borderBottomColor: 'rgba(22, 26, 29, 0.30)', flexDirection: 'row', justifyContent: "center", alignItems: "center", width: "90%" }}>
                                <TextInput placeholder='Type here' placeholderTextColor="rgba(22, 26, 29, 0.30)" style={{ width: "95%", color: "#000" }} />

                                <TouchableOpacity>
                                    <Image style={{ resizeMode: "center", width: 18, height: 18 }} source={require("../assets/blank-password.png")} />
                                </TouchableOpacity>

                            </View>

                            <TouchableOpacity onPress={() => navigation.navigate("ForgetSreen")}>
                                <View style={{ justifyContent: "flex-end", width: "90%", alignItems: "flex-end", marginTop: 12 }}>
                                    <Text style={{ color: ThirdColor, fontSize: pixelRatio * 4.5 }}>Forgot password?</Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                    </View>


                </View>

                {/* InpurFields And Text Close */}

                {/* Login Button Start */}
                <View style={styles.loginbutton}>

                    <TouchableOpacity onPress={() => loginstate("userlogin")} style={{ width: "90%", }}>
                        <View style={{ backgroundColor: primaryColor, width: "100%", height: 40, borderRadius: 22, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{
                                color: '#FFF',
                                textAlign: 'center',
                                fontFamily: 'SpaceGrotesk-Regular',
                                fontSize: pixelRatio * 4.5
                            }}>
                                Sign In
                            </Text>
                        </View>
                    </TouchableOpacity>

                </View>
                {/* Login Button Close */}

                {/* OR design start */}
                <View style={styles.or}>

                    <View style={{ width: "85%", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>

                        <View style={{ width: "42%", height: 0.5, backgroundColor: '#000' }} />
                        <View>
                            <Text style={{ color: "#000", fontSize: pixelRatio * 4.5 }}>or</Text>
                        </View>

                        <View style={{ width: "42%", height: 0.5, backgroundColor: '#000' }} />
                    </View>
                </View>

                {/* OR design Close*/}

                <View style={{ justifyContent: "center", alignItems: "center", marginTop: 18 }}>
                    <View style={{ flexDirection: "row", width: "35%", justifyContent: "space-between", alignItems: "center" }}>

                        <TouchableOpacity>
                            <View style={{ borderWidth: 0.5, borderColor: "#6D6D6D", width: 40, height: 40, backgroundColor: "#FFF", borderRadius: 50, justifyContent: "center", alignItems: "center" }}>
                                <Image style={{ resizeMode: "center", width: screenWidth / 10, height: screenHeight / 20, }} source={require("../assets/Google-icon.png")} />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image style={{ resizeMode: "center", width: screenWidth / 9, height: screenHeight / 18, }} source={require("../assets/facebook-icon.png")} />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image style={{ resizeMode: "center", width: screenWidth / 9, height: screenHeight / 18, }} source={require("../assets/apple-icon.png")} />
                        </TouchableOpacity>

                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center", marginTop: 20 }}>
                    <Text style={{ color: "#000", fontSize: pixelRatio * 4.5 }}>Don’t have account yet? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                        <Text style={{ color: primaryColor, fontSize: pixelRatio * 4.5 }}>Create Account</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ justifyContent: "center", alignItems: "center", marginTop: 22 }}>
                    <View style={{ width: "80%", justifyContent: "center", alignItems: "center", }}>
                        <Text style={{ color: "#000", textAlign: "center", fontSize: pixelRatio * 4.5 }}>By signing in to you account, you agree to our</Text>

                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity>
                                <Text style={{ color: primaryColor, fontSize: pixelRatio * 4.5 }}>
                                    Privacy Policy
                                </Text>
                            </TouchableOpacity>
                            <Text style={{ color: "#000" }}> and </Text>
                            <TouchableOpacity>
                                <Text style={{ color: primaryColor, fontSize: pixelRatio * 4.5 }}>
                                    Terms Conditions.
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>

            </View>
        </SafeAreaView>
    )
}



export default LoginScreen

const styles = StyleSheet.create({
    background: {

    },
    container: {
        height: "100%",
        width: '100%',
    },
    imageAndText: {
        width: "95%",
        marginTop: 50,
        marginLeft: "auto",
    },
    inputfields: {
        justifyContent: "center",
        alignItems: "center"
    },
    loginbutton: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 26
    },
    or: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    }


})
