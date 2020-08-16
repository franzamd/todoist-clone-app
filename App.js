import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Alert,
  Platform,
} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem.js';
import AddItem from './components/AddItem.js';
import {v4 as uuidv4} from 'uuid';

const App = () => {
  const [items, setItems] = useState([
    {id: uuidv4(), text: 'Aprender lo que necesitamos sobre RN'},
    {id: uuidv4(), text: 'Aprender componentes'},
    {id: uuidv4(), text: 'Aprender estados y props'},
    {id: uuidv4(), text: 'Practicar javascript'},
  ]);

  const [item, setItem] = useState({
    id: '',
    text: '',
  });

  const [canEdit, setCanEdit] = useState(false);

  const onChange = (value) =>
    setItem((item) => {
      return {id: item.id, text: value};
    });

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  const addItem = (item) => {
    if (!item.text) {
      Alert.alert(
        'Error',
        'Por favor ingrese una tarea',
        [{text: 'OK', onPress: () => console.log('OK')}],
        {cancelable: false},
      );
    } else {
      setItems((prevItems) => {
        return [{id: uuidv4(), text: item.text}, ...prevItems];
      });
    }
    setCanEdit(false);
    setItem({id: '', text: ''});
  };

  const selectItem = (item) => {
    setItem(item);

    setCanEdit(true);
  };

  const updateItem = (item) => {
    if (item.id && item.text) {
      setItems((prevItems) => {
        return prevItems.map((task) => {
          if (task.id == item.id) {
            return {
              id: task.id,
              text: item.text,
            };
          }

          return task;
        });
      });
    } else {
      Alert.alert(
        'Error',
        'Por favor ingrese una tarea',
        [{text: 'OK', onPress: () => console.log('OK')}],
        {cancelable: false},
      );
    }
    setItem({id: '', text: ''});
    setCanEdit(false);
  };

  return (
    <View style={styles.container}>
      <Header></Header>
      <AddItem
        addItem={addItem}
        item={item}
        updateItem={updateItem}
        onChange={onChange}
        canEdit={canEdit}></AddItem>
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem
            item={item}
            selectItem={selectItem}
            deleteItem={deleteItem}></ListItem>
        )}></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 60 : 0,
  },
});

export default App;
