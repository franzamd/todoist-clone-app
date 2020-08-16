import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddItem = ({addItem, item, onChange, updateItem, canEdit}) => {
  return (
    <View>
      <TextInput
        placeholder="Agregar Tarea..."
        style={styles.input}
        value={item.text}
        onChangeText={onChange}></TextInput>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => (canEdit ? updateItem(item) : addItem(item))}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20}></Icon>{' '}
          {canEdit ? 'Editar Tarea' : 'Añadir Tarea'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#cc4c5c',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
