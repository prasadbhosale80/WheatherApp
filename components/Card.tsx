import { StyleSheet} from 'react-native'
import React from 'react'
import {Box} from 'native-base';

const Card = (props:any) => {
  return (
    <Box style={styles.container} >
        {props.children}
    </Box>
  )
}

export default Card

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        backgroundColor:"#184157",
        padding:10,
        margin:10,
        borderRadius:20,
        borderWidth:5,
        borderColor:"#608094",
    }
})