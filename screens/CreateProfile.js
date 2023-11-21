import React, { useState } from 'react'
import { Image, ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, Pressable, TouchableOpacity, View, PixelRatio, Dimensions, ScrollView, TouchableHighlight } from 'react-native'
import { Fourthcolor, ThirdColor, primaryColor, secondaryColor } from '../utils/colors'
import { TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import CustomPhoneInput from '../component/PhoneNumber';
import DropDownPicker from "react-native-dropdown-picker"
import ImagePicker, { launchImageLibrary } from "react-native-image-picker"
import ImageCropPicker from 'react-native-image-crop-picker';

const Createprofile = () => {

    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    const pixelRatio = PixelRatio.get();
    const navigation = useNavigation()
    // Scale a value using pixel ratio

    const scaleValue = (value) => {
        return PixelRatio.roundToNearestPixel(value * pixelRatio);
    };
    const [SelectImage, setSelectImage] = useState("")
    const [cropImage, setCropImage] = useState("")
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);

    const [items, setItems] = useState([
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' }
    ]);



    const ImagePicker = () => {

        let options = {
            storageOptions: {
                path: "image"
            }
        }

        launchImageLibrary(options, response => {
            setSelectImage(response.assets[0].uri)
            console.log("imagePicker---", response.assets[0].uri)
        })
    }

    const ChoosePhtoFromLibrary = () => {
        ImageCropPicker.openPicker({
            width: 600,
            height: 600,
            cropping: true
        }).then(image => {
            console.log(image.path);
            setCropImage(image.path)
        });
    }



    return (
        <SafeAreaView>
            <ScrollView>

                <View style={styles.container}>

                    {/* InpurFields And Text Start */}

                    <View style={{ marginTop: 14, width: "95%", marginLeft: "auto" }}>
                        <Image style={{ width: screenWidth / 8, height: screenWidth / 8, resizeMode: "center", }} source={require("../assets/arrow-left.png")} />
                    </View>

                    <View style={{ marginTop: 18 }}>
                        <View style={{ borderWidth: 0.5, borderColor: Fourthcolor }} />
                    </View>


                    <View style={{ width: "95%", marginLeft: "auto", marginTop: 30 }}>
                        <Text style={{ color: secondaryColor, fontWeight: "500", fontSize: pixelRatio * 6, }}>Create Profile</Text>
                    </View>

                    <View style={{ width: "95%", marginLeft: "auto", }}>

                        <View style={{ marginTop: 22 }}>
                            <Text style={{ color: secondaryColor, fontWeight: "500", fontSize: pixelRatio * 4.5, }}>Profile Photo</Text>
                        </View>

                        <TouchableOpacity onPress={ChoosePhtoFromLibrary} style={{ marginTop: 12, width: "35%" }}>

                            <View style={{ width: 130, height: 130, borderRadius: 100, justifyContent: "center", alignItems: "center", borderWidth: 1, borderStyle: "dashed", borderColor: Fourthcolor }}>
                                {
                                    !cropImage ?
                                        <Image style={{ width: screenWidth / 15, height: screenHeight / 18, resizeMode: "center" }} source={require("../assets/icon-up.png")} />
                                        :
                                        null
                                }
                                {
                                    !cropImage ?
                                        <Text style={{ color: Fourthcolor, fontWeight: "500", fontSize: pixelRatio * 4.5, }}>Upload</Text>
                                        :
                                        null
                                }

                                {
                                    cropImage ?
                                        <Image style={{ width: 120, height: 120, resizeMode: "cover", borderRadius: 100 }} source={{ uri: cropImage }} />
                                        :
                                        null
                                }

                            </View>
                        </TouchableOpacity>

                    </View>


                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 20, }}>

                        <TouchableOpacity style={{ width: "90%", flexDirection: 'row', justifyContent: "center", alignItems: "center", borderRadius: 8, backgroundColor: primaryColor }}>
                            <View style={{ flexDirection: "row", width: "90%", justifyContent: "space-between", alignItems: "center" }}>
                                <Text style={{ color: '#FFF', textAlign: 'center', fontFamily: 'SpaceGrotesk-Regular', fontSize: pixelRatio * 4.5 }}>Profile Overview</Text>
                                <Image style={{ width: screenWidth / 12, height: screenHeight / 12, resizeMode: "center", }} source={require("../assets/arrow-bottom.png")} />
                            </View>
                        </TouchableOpacity>
                    </View>


                    <View style={{ marginTop: 30 }}>
                        <View style={styles.inputfields}>

                            <View style={{ width: "90%", }}>
                                <Text style={{ color: secondaryColor, fontWeight: "500", textTransform: "capitalize", fontSize: pixelRatio * 4.5, }}>First Name</Text>
                                <View style={{ borderBottomWidth: 0.5, borderBottomColor: Fourthcolor, flexDirection: 'row', justifyContent: "center", alignItems: "center", width: "95%" }}>
                                    <TextInput placeholder='Type here' placeholderTextColor={Fourthcolor} style={{ width: "100%", color: "#000" }} />
                                </View>
                            </View>

                            <View style={{ width: "90%", marginTop: 20 }}>
                                <Text style={{ color: secondaryColor, fontWeight: "500", textTransform: "capitalize", fontSize: pixelRatio * 4.5, }}>Last Name</Text>
                                <View style={{ borderBottomWidth: 0.5, borderBottomColor: Fourthcolor, flexDirection: 'row', justifyContent: "center", alignItems: "center", width: "95%" }}>
                                    <TextInput placeholder='Type here' placeholderTextColor={Fourthcolor} style={{ width: "100%", color: "#000" }} />
                                </View>
                            </View>


                            <View style={{ width: "90%", marginTop: 20 }}>
                                <Text style={{ color: secondaryColor, fontWeight: "500", textTransform: "capitalize", fontSize: pixelRatio * 4.5, }}>User Name</Text>
                                <View style={{ borderBottomWidth: 0.5, borderBottomColor: Fourthcolor, flexDirection: 'row', justifyContent: "center", alignItems: "center", width: "95%" }}>
                                    <TextInput placeholder='@' placeholderTextColor={Fourthcolor} style={{ width: "100%", color: "#000" }} />
                                </View>
                            </View>


                            <View style={{ width: "90%", marginTop: 20 }}>
                                <Text style={{ color: secondaryColor, fontWeight: "500", textTransform: "capitalize", fontSize: pixelRatio * 4.5, }}>First Name</Text>
                                <View style={{ borderBottomWidth: 0.5, borderBottomColor: Fourthcolor, flexDirection: 'row', justifyContent: "center", alignItems: "center", width: "95%" }}>
                                    <TextInput placeholder='Type here' placeholderTextColor={Fourthcolor} style={{ width: "100%", color: "#000" }} />
                                </View>
                            </View>


                            <View style={{ width: "90%", marginTop: 20 }}>
                                <Text style={{ color: secondaryColor, fontWeight: "500", textTransform: "capitalize", fontSize: pixelRatio * 4.5, }}>Email Address</Text>
                                <View style={{ borderBottomWidth: 0.5, borderBottomColor: Fourthcolor, flexDirection: 'row', justifyContent: "center", alignItems: "center", width: "95%" }}>
                                    <TextInput placeholder='Type here' placeholderTextColor={Fourthcolor} style={{ width: "100%", color: "#000" }} />
                                </View>
                            </View>


                            <View style={{ width: "90%", marginTop: 20 }}>
                                <Text style={{ color: secondaryColor, fontWeight: "500", textTransform: "capitalize", fontSize: pixelRatio * 4.5, }}>Phone Number</Text>
                                <View style={{ borderBottomWidth: 0.5, borderBottomColor: Fourthcolor, flexDirection: 'row', justifyContent: "center", alignItems: "center", width: "95%" }}>
                                    <TextInput placeholder='Type here' placeholderTextColor={Fourthcolor} style={{ width: "100%", color: "#000" }} />
                                </View>
                            </View>

                            {/* <CustomPhoneInput /> */}

                            <View style={{ width: "90%", marginTop: 20 }}>
                                <Text style={{ color: secondaryColor, fontWeight: "500", textTransform: "capitalize", fontSize: pixelRatio * 4.5, }}>First Name</Text>
                                <View style={{ borderBottomWidth: 0.5, borderBottomColor: Fourthcolor, flexDirection: 'row', justifyContent: "center", alignItems: "center", width: "95%" }}>
                                    <TextInput placeholder='Type here' placeholderTextColor={Fourthcolor} style={{ width: "100%", color: "#000" }} />
                                </View>
                            </View>

                            <View style={{ width: "90%", marginTop: 20 }}>
                                <Text style={{ color: secondaryColor, fontWeight: "500", textTransform: "capitalize", fontSize: pixelRatio * 4.5, }}>Gender</Text>

                                <View style={{ marginTop: 12, flexDirection: "row", width: "90%", justifyContent: "space-between", alignItems: "center" }}>
                                    {/* <Text style={{ color: secondaryColor, textAlign: 'center', fontFamily: 'SpaceGrotesk-Regular', fontSize: pixelRatio * 4.5 }}>Select</Text>
                                    <TouchableOpacity>
                                        <Image style={{ width: screenWidth / 12, height: screenHeight / 16, resizeMode: "center", tintColor: secondaryColor }} source={require("../assets/arrow-right.png")} />
                                    </TouchableOpacity> */}
                                    <View style={{ zIndex: 999, borderBottomWidth: 0.5, borderBottomColor: Fourthcolor, flexDirection: 'row', width: "95%", }}>
                                        <DropDownPicker
                                            placeholder="select"
                                            placeholderStyle={{ color: Fourthcolor, backgroundColor: "transparent" }}
                                            disableBorderRadius={true}
                                            open={open}
                                            value={value}
                                            items={items}
                                            setOpen={setOpen}
                                            setValue={setValue}
                                            setItems={setItems}

                                        />
                                    </View>
                                </View>

                            </View>


                            {/* About YOu Start */}
                            <View style={{ width: "90%", marginTop: 20, }}>
                                <Text style={{ color: secondaryColor, fontWeight: "500", textTransform: "capitalize", fontSize: pixelRatio * 4.5, }}>About you</Text>


                                <View style={{ borderBottomWidth: 0.5, borderBottomColor: Fourthcolor, flexDirection: 'row', width: "95%", }}>
                                    {/* <TextInput placeholder='Type here' placeholderTextColor={Fourthcolor} style={{ width: 220, color: "#000", borderWidth: 1, height: 120 }} /> */}

                                    <TextInput
                                        underlineColorAndroid="transparent"
                                        placeholder="Type here"
                                        placeholderTextColor={Fourthcolor}
                                        numberOfLines={6}
                                        multiline={true}

                                        style={[
                                            {
                                                color: "#000",
                                                textAlignVertical: 'top',
                                                height: 100,
                                                width: "100%",
                                            },
                                        ]}
                                    />


                                </View>
                                {/* <Text style={{ color: secondaryColor, textTransform: "capitalize", fontSize: pixelRatio * 4.5, }}>0/120</Text> */}

                            </View>

                            {/* About YOu Close */}
                        </View>
                    </View>

                    {/* Gallery Content Start */}
                    <View style={{ justifyContent: "center", alignItems: "center", paddingBottom: 20 }}>

                        <View style={{ marginTop: 20, width: "90%", }}>

                            <Text style={{ color: secondaryColor, fontWeight: "500", textTransform: "capitalize", fontSize: pixelRatio * 4.5, }}>Gallery</Text>
                            <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center", marginTop: 16 }}>
                                <TouchableOpacity onPress={() => ImagePicker()}>
                                    {
                                        !SelectImage ?

                                            <Image style={{ width: 105, height: 105, resizeMode: "center" }} source={require("../assets/image-plus.png")} />
                                            :
                                            null
                                    }

                                    {
                                        SelectImage ?
                                            <View>
                                                <Image style={{ width: screenWidth / 3.5, height: 105, resizeMode: "cover", }} source={{ uri: SelectImage }} />
                                            </View>
                                            :
                                            null
                                    }

                                </TouchableOpacity>


                                <TouchableOpacity>
                                    <Image style={{ width: 105, height: 105, resizeMode: "center" }} source={require("../assets/image-plus.png")} />
                                </TouchableOpacity>


                                <TouchableOpacity>
                                    <Image style={{ width: 105, height: 105, resizeMode: "center" }} source={require("../assets/image-plus.png")} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    {/* Gallery Content Close */}



                </View>
            </ScrollView>

        </SafeAreaView>
    )
}



export default Createprofile

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
        // justifyContent: "center",
        // alignItems: "center",
        // marginTop: 26
    },
    or: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    }


})
