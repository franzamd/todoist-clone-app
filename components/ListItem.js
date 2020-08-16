import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const ListItem = ({item, selectItem, deleteItem}) => {
  return (
    <TouchableOpacity style={styles.listItem} onPress={() => selectItem(item)}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
        <Icon
          name="delete"
          size={20}
          backgroundColor="firebrick"
          onPress={() => deleteItem(item.id)}></Icon>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listItemText: {
    fontSize: 28,
  },
});

export default ListItem;
