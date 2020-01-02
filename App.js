import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from './Navbar';
import AddTodo from './AddTodo';

 const App = () => {
   const [todos, setTodos] = useState([]);

   const addTodo = title => setTodos(prev => [...prev, {  id: Date.now.toString(), title }]);
   const clearTodos = () => setTodos([]);
   

  return (
    <View style={styles.container}>
      <NavBar />
      <AddTodo addTodo={addTodo} clearTodos={clearTodos} />
      <View>
        { 
          todos.map(({title, id}) => 
            <View style={styles.todoItem} key={id}>
              <Text style={styles.todoTitle}>{title}</Text>
            </View> 
          )
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  todoTitle: {
    color: 'white',
  }
});

export default App;
