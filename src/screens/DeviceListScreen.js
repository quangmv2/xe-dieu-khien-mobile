import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import BluetoothSerial, { withSubscription } from "react-native-bluetooth-serial-next";
import DeviceList from "../components/DeviceList";

const DeviceListScreen = () => {

    const [devices, setDevices] = useState([]);

    useEffect(() => {
        getListDevice();
    }, []);
    
    const getListDevice = async () => {
        const listDevice = await BluetoothSerial.list();
        setDevices(listDevice);
        console.log(listDevice);
    }

    return (
        <View style={styles.container}>
            <Text>Hi Device</Text>
            {
                <DeviceList listDevice={devices} />
            }
        </View>
    );
}

export default DeviceListScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});