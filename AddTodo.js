import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddTodo = ({ AddTodo }) => {
    return (
        <View style={style.container}>
            <TextInput style={style.input} />
            <Button style={style.button} title='Add todo' />
        </View>
    );
};

const style = StyleSheet.create({
    container : {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
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