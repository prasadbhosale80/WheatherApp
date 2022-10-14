import { Image, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import Card from '../components/Card';
import { Text, Box } from 'native-base';

const MoreInfo = (props:any) => {
  const wheatherData = useSelector((state: any) => state.wheatherInfoSlice.wheatherInfo);

  useEffect(() => {
    props.navigation.setOptions({ title: `Wheather of ${wheatherData.location.name}` });
  }, [])
  
  
  return (
    <Card>
        <Box style={styles.container} >
          <Box style={styles.imageContainer} >
            <Image source={{ uri: wheatherData.current.weather_icons[0] }} style={styles.flag} />
          </Box>
          <Box style={styles.infoContainer} >
            <Text style={styles.title} >temperature</Text>
            <Text style={styles.info} >{wheatherData.current.temperature}  °C</Text>
            <Text style={styles.title} >Wind Speed</Text>
            <Text style={styles.info} >{wheatherData.current.wind_speed} m/sec</Text>
            <Text style={styles.title} >precipitation</Text>
            <Text style={styles.info} >{wheatherData.current.precip}</Text>
          </Box>
        </Box>
      </Card>
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems:"center",
    justifyContent:"center",
    display:"flex",
  },

  imageContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    height: 200,
    width: 200,
    marginTop: 20,
    margin: 10
  },
  flag: {
    height: "100%",
    width: "100%"
  },
  title: {
    fontSize: 18,
    margin: 2,
    padding: 5,
    color: "#fff",
    textTransform: 'uppercase'
  },
  infoContainer: {
    padding: 10,
    margin: 10,
    marginTop: 20
  },
  info: {
    fontSize: 22,
    margin: 2,
    padding: 5,
    color: "#7cb4d6",
  }
})

export default MoreInfo

