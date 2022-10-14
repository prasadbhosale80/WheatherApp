import { StyleSheet } from 'react-native'
import React from 'react';
import { Box, HStack, Text } from 'native-base';
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable } from 'react-native'


const ErrorPopup = (props: any) => {
    return (

        <Box style={styles.container} >
            <HStack justifyContent={'flex-end'} >
                <Pressable onPress={props.onClose} >
                    <Ionicons name={'close'} size={20} color="#000" />
                </Pressable>
            </HStack>
            <Box style={styles.iconContainer} >
                <Ionicons name={props.iconName ? props.iconName : 'alert-circle'} 
                    size={80} color="#000" />
            </Box>
            <HStack justifyContent={'center'} >
                <Text fontSize={'lg'} textAlign={'center'} >{props.errorMsg}</Text>
            </HStack>
        </Box>

    )
}

export default ErrorPopup

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 15,
        borderWidth: 2,
        borderColor: "#608094",
        borderRadius: 15
    },
    iconContainer:{
        justifyContent:'center',
         display:'flex',
         alignItems:'center',
         marginTop:-15
    }
})