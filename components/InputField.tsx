import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react';

import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type InputField = {
    onChangeText: Function | any,
    value: String | any,
    placeholder: String | any,
    keyboardType: String | any
}

const InputField = (props: InputField) => {
    return <TextInput
        style={styles.input}
        onChangeText={props.onChangeText}
        value={props.value}
        placeholder={props.placeholder}
        keyboardType={props.keyboardType}
    />

}

export default InputField

const styles = StyleSheet.create({
    input: {
        width:windowWidth*0.9,
        height: windowHeight*0.06,
        marginHorizontal:windowWidth*0.02,
        marginVertical:windowHeight*0.01,
        borderWidth: 2,
        padding: windowWidth*0.03,
        alignSelf:'center',
        borderColor:"#608094",
        borderRadius:5,
    },
})