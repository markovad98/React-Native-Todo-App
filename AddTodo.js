import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddTodo = ({ addTodo, clearTodos }) => {
    const [text, setText] = useState('');

    const handleAddTodo = () => {
        if (text.trim()) {
            addTodo(text);
            setText('');
        }
    };

    return (
        <View style={style.container}>
            <TextInput value={text} onChangeText={setText} style={style.input} />
            <Button onPress={handleAddTodo} style={style.button} title='Add todo' />
            <Button onPress={clearTodos} title='Delete todos' />
        </View>
    );
};

const style = StyleSheet.create({
    container : {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        flexWrap: 'wrap',
    },
    input: {
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderColor: '#0000ff',
        borderBottomWidth: 2,
        width: '70%',
    },
    button: {
        width: 50,
    }
})

export default AddTodo;