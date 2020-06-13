import React, { memo, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Dialog from "react-native-dialog";
import DeviceList from "../components/DeviceList";

const ChooseDevice = memo((props) => {

    const [visible, setVisible] = useState(false);

    const openDialog = () => {
        setVisible(true);
    } 

    const closeDialog = () => {
        setVisible(false);
    }

    const onChooseDevice = (device) => {
        console.log(device);
    }

    return (
       <>
        <TouchableOpacity style={styles.container} onPress={openDialog}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
        <View>
            <Dialog.Container visible={visible}>
            <Dialog.Title>{props.title}</Dialog.Title>
            {/* <Dialog.Description> */}
                <DeviceList onChooseDevice={onChooseDevice} />
            {/* </Dialog.Description> */}
            <Dialog.Button label="Cancel" onPress={closeDialog}/>
            <Dialog.Button label="Delete" onPress={closeDialog}/>
            </Dialog.Container>
        </View>
       </>
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