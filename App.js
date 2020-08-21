/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import ControlScreen from './src/screens/ControlScreen';
import BluetoothSerial, { withSubscription } from "react-native-bluetooth-serial-next";


const App = () => {

  useEffect(() => {
    (async () => await BluetoothSerial.requestEnable())();
  }, [])

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#FFF'} />
      <SafeAreaView style={styles.container}>
        {/* <DeviceListScreen /> */}
        <ControlScreen />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center"
    // backgroundColor: '#f6f8fa'
  }
});

export default App;
