import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import Orientation from "react-native-orientation";
import { Slider } from "react-native-elements";
import ButtonControl from "../components/ButtonControl";
import ChooseDevice from "../components/ChooseDevice";

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const ControlScreen = () => {

    // const [buttonControls] = useState(listButtonControl);
    const [status, setStatus] = useState({
        orientation: 'Tiến',
        speed: 0,
    });
    
    useEffect(() => {
        Orientation.lockToLandscape();
    }, []);

    const setOrientation = (orientation) => {
        setStatus({
            ...status,
            orientation
        });
    }

    const setSpeed = (speed) => {
        setStatus({
            ...status,
            speed
        });
    }

    return (
        <View style={styles.container}>
           <KeyboardAvoidingView style={styles.container} behavior={Platform.OS==='ios'?'padding':'height'}> 
                <View style={styles.control}>
                    <View style={styles.status}>
                        <Text>Kết nối:</Text>
                        <Text>Thiết bị:</Text>
                        <Text>Hướng: {status.orientation}</Text>
                        <Text>Tốc độ: {status.speed}</Text>
                    </View>
                    <View style={styles.controlFlastListContainer}>
                        <FlatList 
                            data={listButtonControl}
                            numColumns={3}
                            renderItem={({item}) => {
                                return (
                                    <View style={styles.controlWrapper}>
                                        {item.isButton? <ButtonControl style={item.style} {...item} setOrientation={setOrientation} />:<View style={item.style}></View>}
                                    </View>
                                )
                            }}
                            keyExtractor={(item, index) => index}
                            contentContainerStyle={styles.controlFlastList}
                        />
                    </View>
                </View>
                <View style={styles.functions}>
                    <Text style={styles.function}>Function</Text>
                    <View style={styles.speedDevice}>
                        <View style={styles.deviceContainer}>
                            <ChooseDevice title={"Bluetooth Device"} />
                            <ChooseDevice title={"Wifi Device"} />
                        </View>
                        <View style={styles.speedContainer}>
                            <Slider
                                style={styles.slider}
                                value={255}
                                orientation={"vertical"}
                                minimumValue={0}
                                maximumValue={255}
                                minimumTrackTintColor="#444444"
                                maximumTrackTintColor="#5AC5F8"
                                thumbTintColor="#5AC5F8"
                                onValueChange={value=>setSpeed(255-value)}
                                step={1}
                            />
                        </View> 
                    </View>
                </View>
                {/* <View style={styles.liveVideo}>
                    <Text style={{color: "#FFF"}}>VIDEO</Text>
                </View> */}
            </KeyboardAvoidingView>
        </View>
    )
}

export default ControlScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        // backgroundColor: 'blue',
        position: "relative",
        backgroundColor: '#FFF'
    },
    control: {
        flex: 1,
        // flexGrow: 3,
        flexDirection: "column",
        // backgroundColor: 'blue',
        // justifyContent: "center",
        // alignItems: "center",
        zIndex: 10
    },
    status: {
        flex: 4,
        // backgroundColor: 'pink'
        marginHorizontal: 20,
        // marginVertical: 10,
        marginBottom: 0
    },
    controlFlastListContainer: {
        flex: 8,
        // backgroundColor: 'red'
    },
    controlFlastList: {
        flex: 1,
        justifyContent: "flex-end",
        // height: "30%"
    },
    controlWrapper: {
        flex: 1
    },
    functions: {
        flex: 1.5,
        // backgroundColor: 'pink',
        flexDirection: "row",
    },
    liveVideo: {
        position: "absolute",
        width: screenWidth/2,
        height: screenHeight/2.5,
        backgroundColor: '#2C7BF6',
        // top: 10,
        left: screenWidth/2 - screenWidth/4,
        right: "50%",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 5
    },
    function: {
        flex: 7,
        // backgroundColor: 'blue',
        color: '#FFF'
    },  
    speedDevice: {
        flex: 5,
        justifyContent: "flex-start",
        flexDirection: "column"
        // backgroundColor: 'red',
    },
    speedContainer: {
        flex: 9,
        justifyContent: "center",
        alignItems: "center"
    },
    deviceContainer: {
        flex: 3,
        justifyContent: "center",
        // alignItems: "center"
    },
    slider: {
        flex: 1,
        // backgroundColor: 'green',
        // marginVertical: 20,
        // marginRight: 20
        marginBottom: 20
    }
});

const listButtonControl = [
    {
        isButton: false,
    },
    {
        isButton: true,
        title: 'Tiến',
        style: {
            transform: [
                {
                  rotate: "90deg"
                }
            ],
        },
        image: require('../assets/images/control3.png')
    },
    {
        isButton: false,
    },
    {
        isButton: true,
        title: 'Trái',
        style: {
            transform: [
                {
                  rotate: "0deg"
                }
            ],
        },
        image: require('../assets/images/control3.png')
    },
    {
        isButton: false,
    },
    {
        isButton: true,
        title: 'Phải',
        style: {
            transform: [
                {
                  rotate: "180deg"
                }
            ],
        },
        image: require('../assets/images/control3.png')
    },
    {
        isButton: false,
    },
    {
        isButton: true,
        title: 'Lùi',
        style: {
            transform: [
                {
                  rotate: "270deg"
                }
            ],
        },
        image: require('../assets/images/control3.png')
    },
    {
        isButton: false,
    },
];
