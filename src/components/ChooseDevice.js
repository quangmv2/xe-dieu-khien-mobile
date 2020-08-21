import React, { memo, useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Dialog from "react-native-dialog";
import BluetoothSerial, { withSubscription } from "react-native-bluetooth-serial-next";
import DeviceList from "../components/DeviceList";

var idInterval = 0;

const ChooseDevice = memo((props) => {

    const [visible, setVisible] = useState(false);
    const [devices, setDevices] = useState([]);
    const [device, setDevice] = useState(null);

    useEffect(() => {
        getListDevice();
        // idInterval = setInterval(() => {
        // }, 1000);
        // setInterval(() => {
        //     if (device) BluetoothSerial.write("H");
        // }, 100);
        // return () => clearInterval(idInterval);
    }, []);

    const openDialog = () => {
        setVisible(true);
    } 

    const closeDialog = () => {
        setVisible(false);
    }

    const onChooseDevice = (device) => {
        console.log(device);
    }

    const getListDevice = async () => {
        const listDevice = await BluetoothSerial.list();
        setDevices(listDevice);
        console.log(listDevice);
    }

    const paireDevice = async (id) => {
        console.log(id);
        const dev = await BluetoothSerial.connect(id);
        setDevice(dev);
        console.log("connect", dev);
        // BluetoothSerial.write('1');
        // BluetoothSerial.write(String.fromCharCode(1));
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
                <DeviceList onChooseDevice={onChooseDevice} data={devices} paire={paireDevice} />
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
        color: '#FFF',
    }
});

// export default withSubscription({
//     subscriptionName: 'events',
//     destroyOnWillUnmount: true,
// })(ChooseDevice);

export default ChooseDevice;