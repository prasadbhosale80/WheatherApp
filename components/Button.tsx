import { Pressable, Text, HStack } from "native-base";
import React from "react";
import { GestureResponderEvent, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type ButtonTypes = {
    name: String,
    onPress: GestureResponderEvent | any,
    endIcon?: String | any;
    startIcon?: String | any,
    height?: any,
    width?: any,
    alignSelf: any,
    disable?: boolean,
};

const Button = (props: ButtonTypes) => {
    return (
        <Pressable
            style={styles.container}
            disabled={props.disable}
            onPress={props.onPress}
            alignSelf={props.alignSelf ? props.alignSelf : null}
            bg={props.disable ? "light.400" : "info.600"}
            height={props.height ? props.height : null}
            width={props.width ? props.width : null}
        >
            <HStack space={"2"}>
                {props.startIcon && (
                    <Ionicons name={props.startIcon} size={30} color="#fff" />
                )}
                <Text style={styles.btnText} >
                    {props.name}
                </Text>
                {props.endIcon && (
                    <Ionicons name={props.endIcon} size={30} color="#fff" />
                )}
            </HStack>
        </Pressable>
    );
};

export default Button;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: windowHeight*0.009 ,
        paddingHorizontal:windowWidth*0.05,
        borderRadius: 5,
        marginHorizontal: windowWidth*0.005,
        marginVertical:windowHeight*0.009,
    },
    btnText: {
        textTransform: "uppercase",
        alignSelf: 'center',
        textAlign: "center",
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    }
});
