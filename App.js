import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from './Navbar';
import AddTodo from './AddTodo';

 const App = () => {
   const [todos, setTodos] = useState([]);

   const addTodo = title => {
     const newTodo = {
       id: Date.now.toString(),
       title,
     }

     setTodos(prev => [...prev, {  id: Date.now.toString(), title }]);
   }

  return (
    <View style={styles.container}>
      <NavBar />
      <AddTodo addTodo={addTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  }
});

export default App;
