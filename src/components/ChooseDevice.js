import React, { memo } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const ChooseDevice = memo((props) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#2C7BF6',
        margin: 5,
        borderRadius: 10,
    },
    text: {
        color: '#FFF'
    }
});

export default ChooseDevice;