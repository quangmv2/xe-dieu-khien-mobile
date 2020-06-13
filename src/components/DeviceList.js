// import React from "react";
// import { View, FlatList, Text, StyleSheet } from "react-native";

// const DeviceList = (props) => {

//     const { listDevice } = props;

//     console.log(listDevice);
    

//     return (
//         <View style={styles.container}>
//             <FlatList 
//                 data={listDevice}
//                 renderItem={(item) => {
//                     return <Text style={{backgroundColor: 'blue'}}>{item.name}</Text>
//                 }}
//                 keyExtractor={item => item.id}
//             />
//             <Text>Devices</Text>
//         </View>
//     );
// }

// export default DeviceList;
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: 'red'
//     }
// });
import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity, ToastAndroid, Alert } from 'react-native';
// import Constants from 'expo-constants';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

function Item({ title, address }) {
  return (
    <TouchableOpacity style={styles.item} onPress={() => Alert.alert(title + '\n' + address)}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{address}</Text>
    </TouchableOpacity>
  );
}

export default function App(props) {

  const { listDevice } = props;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={listDevice}
        renderItem={({ item }) => <Item title={item.name} address={item.address}/>}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowOffset: {
        height: 5,
        width: 3
    },
    shadowColor: '#fcfcfc'
  },
  title: {
    fontSize: 32,
  },
});
