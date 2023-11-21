import React from 'react'
import { Image, ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { primaryColor } from '../utils/colors'


const SplashScreen = () => {

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Image source={require('../assets/splash-background.png')} style={[styles.background, { width: '100%', height: '100%' }]} />
                <View style={styles.contentContainer}>
                    <View style={styles.logoContainer}>
                        <Image style={{ width: 200, height: 200 }} resizeMode='contain' source={(require('../assets/logo.png'))} />
                    </View>
                    <View style={styles.sloganContainer}>
                        <Text style={styles.slogan}>
                            Productivity with every connection
                        </Text>
                    </View>
                    <View style={{ width: "100%" }}>
                        <TouchableOpacity>
                            <View style={{ backgroundColor: primaryColor, width: "100%", height: 40, borderRadius: 22, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{
                                    color: '#FFF',
                                    textAlign: 'center',
                                    fontFamily: 'SpaceGrotesk-Regular',
                                    fontSize: 14,
                                }}>
                                    Start
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )

}

export default SplashScreen

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'rgba(211,211,211)',
        opacity: 0.1,
        flex: 1,
        position: 'absolute',
        // remove width and height to override fixed static size
        resizeMode: 'cover'
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        backgroundColor: '(255, 255, 255, 0.90)',
        zIndex: 9999,
        opacity: 1
    },
    contentContainer: {
        width: "90%",
        justifyContent: 'center',
        // borderWidth: 1,
        alignItems: 'center',
        gap: 50
    },
    logoContainer: {
        // width: "60%"
    },
    sloganContainer: {
        // width: "90%",
        // borderWidth: 1
    },
    slogan: {
        fontSize: 14,
        fontFamily: 'SpaceGrotesk-Regular'
    }
})
