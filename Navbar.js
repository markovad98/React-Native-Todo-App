import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const NavBar = () => {
    return (
        <View style={style.container}>
            <Text style={style.child}>React Native todo app</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#0000ff',
    },
    child: {
        fontSize: 26,
        color: 'white',
      }
});

export default NavBar