import React from 'react'
import { Image, ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, Pressable, TouchableOpacity, View, PixelRatio, Dimensions } from 'react-native'
import { Fourthcolor, ThirdColor, primaryColor, secondaryColor } from '../utils/colors'
import { TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';



const ForgetResetSreen = () => {

    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    const pixelRatio = PixelRatio.get();
    const navigation = useNavigation()
    // Scale a value using pixel ratio

    const scaleValue = (value) => {
        return PixelRatio.roundToNearestPixel(value * pixelRatio);
    };

    return (
        <SafeAreaView>
            <View style={styles.container}>
                {/* InpurFields And Text Start */}
                <View style={{ marginTop: 14, width: "95%", marginLeft: "auto" }}>
                    <Image style={{ width: screenWidth / 8, height: screenWidth / 8, resizeMode: "center", }} source={require("../assets/arrow-left.png")} />
                </View>

                <View style={{ marginTop: 18 }}>
                    <View style={{ backgroundColor: Fourthcolor, borderWidth: 0.5, borderColor: Fourthcolor }} />
                </View>


                <View style={{ width: "95%", marginLeft: "auto", marginTop: 30 }}>
                    <Text style={{ color: secondaryColor, fontWeight: "500", fontSize: 18 }}>Reset Password?</Text>
                </View>


                <View style={{ justifyContent: "center", alignItems: "center", marginTop: 30, }}>

                    <View style={{ width: "90%", }}>
                        <Text style={{ fontSize: pixelRatio * 4.5, color: secondaryColor, fontWeight: "500", textTransform: "capitalize", }}>New Password</Text>

                        <View style={{ borderBottomWidth: 0.5, borderBottomColor: 'rgba(22, 26, 29, 0.30)', flexDirection: 'row', justifyContent: "center", alignItems: "center", width: "95%" }}>
                            <TextInput placeholder='Type here' placeholderTextColor="rgba(22, 26, 29, 0.30)" style={{ width: "95%", color: "#000" }} />

                            <TouchableOpacity>
                                <Image style={{ resizeMode: "center", width: 18, height: 18 }} source={require("../assets/blank-password.png")} />
                            </TouchableOpacity>

                        </View>
                    </View>



                    <View style={{ width: "90%", marginTop: 18 }}>
                        <Text style={{ fontSize: pixelRatio * 4.5, color: secondaryColor, fontWeight: "500", textTransform: "capitalize", }}>Re-Type Password</Text>

                        <View style={{ borderBottomWidth: 0.5, borderBottomColor: 'rgba(22, 26, 29, 0.30)', flexDirection: 'row', justifyContent: "center", alignItems: "center", width: "95%" }}>
                            <TextInput placeholder='Type here' placeholderTextColor="rgba(22, 26, 29, 0.30)" style={{ width: "95%", color: "#000" }} />

                            <TouchableOpacity>
                                <Image style={{ resizeMode: "center", width: 18, height: 18 }} source={require("../assets/blank-password.png")} />
                            </TouchableOpacity>

                        </View>
                    </View>

                </View>


                {/* InpurFields And Text Close */}

                {/* Login Button Start */}
                <View style={styles.loginbutton}>

                    <TouchableOpacity onPress={() => navigation?.navigate("VerificationForgetScreen")} style={{ width: "90%", }}>
                        <View style={{ backgroundColor: primaryColor, width: "100%", height: 40, borderRadius: 22, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{
                                color: '#FFF',
                                textAlign: 'center',
                                fontFamily: 'SpaceGrotesk-Regular',
                                fontSize: pixelRatio * 4.5
                            }}>
                                Reset Password
                            </Text>
                        </View>
                    </TouchableOpacity>

                </View>
                {/* Login Button Close */}

            </View>
        </SafeAreaView>
    )
}



export default ForgetResetSreen

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
        marginTop: 100
    },
    or: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    }


})
