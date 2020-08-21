import React, { memo } from "react";
import { StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import BluetoothSerial from "react-native-bluetooth-serial-next";


const ButtonControl = (props) => {

    const onPressControl = () => {
        console.log(props.title);
        BluetoothSerial.write(String.fromCharCode(1));
        BluetoothSerial.write(String.fromCharCode(128));
    }

    const { setOrientation } = props;
    return (
        <TouchableOpacity 
            style={{...props.style, ...styles.container}}
            // activeOpacity={0.7}
            onPress={() => {setOrientation(props.title); onPressControl();}}
            // onPressIn={() => setOrientation(props.title)}
            // onPressOut={() => setOrientation(props.title)}
        >
            {props.image?<Image source={props.image} />:<Text>{props.title}</Text>}
        </TouchableOpacity>
    );
}

export default memo(ButtonControl);

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // height: 60,
        // backgroundColor: 'red',
        margin: 10,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    }
});