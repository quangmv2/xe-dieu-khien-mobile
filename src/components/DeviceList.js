import React, { memo } from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';

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

const Item = (props) => {


  const {title, id} = props.item;
  const {onPressItem} = props;

  return (
    <TouchableOpacity style={styles.item} onPress={() => onPressItem(props.item)}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{id}</Text>
    </TouchableOpacity>
  );
}

const DeviceList = (props) => {


  const onChooseDevice = props.onChooseDevice;
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item item={item} onPressItem={onChooseDevice}/>}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    // marginHorizontal: 16,
    shadowOffset: {
        height: 5,
        width: 3
    },
    shadowColor: '#fcfcfc'
  },
  title: {
    // fontSize: ,
  },
});

export default memo(DeviceList);