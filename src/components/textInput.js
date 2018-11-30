import React from 'react';
import { TextInput, StyleSheet } from 'react-native';



const Input = ({onChangeText, value}) => (
    <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Nome da TAG"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    onChangeText = {onChangeText}
                    value = {value}             
    />


)
export default Input

const styles = StyleSheet.create({
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1,
        paddingLeft: 10,
     },
})