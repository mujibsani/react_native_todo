import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, FlatList, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import TodoItem from './components/todoItem';
import Header from './components/header';
import AddTodo from './components/addTodo';

export default function App() {
  const [todos, setTodo] = useState([
    {text: 'buye Coffe', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'play on the switch', key: '3'},
    {text: 'Office time', key: '4'},
  ]);

  const pressHandler = (key) =>{
    setTodo((prevTodo)=>{
      return prevTodo.filter(todo => todo.key != key);
    });
  }

  const submitHandler = (text) => {
    if(text.length > 3){
      setTodo((prevTodo) => {
        return[
          {text:text, key:Math.random.toString()},
          ...prevTodo
        ]
      });
    }else{
      Alert.alert('OPPS!', 'todo must be 3 charecter long', [
        {text: 'understood', onPress:() => console.log('alert closed')}
      ])
    }
  }
  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
      console.log('dissmissed keyboard');
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item})=>(
                <TodoItem item={item} pressHandler = {pressHandler}/>
              )}
            />
          </View>
        </View>

      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#fff',

  },
  content:{
      flex: 1,
      padding: 10,

  },
  list:{
    flex: 1,
    padding: 10,

  }
});
