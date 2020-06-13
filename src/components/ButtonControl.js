import React, { memo, useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";

const ButtonControl = (props) => {

    const onPressControl = () => {
        console.log(props.title);
    }

    const { setOrientation } = props;
    return (
        <TouchableOpacity 
            style={{...props.style, ...styles.container}}
            activeOpacity={0.7}
            onPressIn={() => setOrientation(props.title)}
            onPressOut={() => setOrientation(props.title)}
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