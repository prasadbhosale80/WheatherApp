import { StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import Card from '../components/Card';
import { Text, Box } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import ErrorPopup from '../components/ErrorPopup';
import { getWheatherInfo } from './../api/getWheatherData';
import { setWheatherInfo } from '../store/wheatherInfoSlice';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const WheatherInfo = (props: any) => {
  const countryData = useSelector((state: any) => state.wheatherInfoSlice.countryData[0]);
  const [status, setStatus] = useState(true);
  const [btnText, setBtnText] = useState("Capital Wheather")
  const dispatch = useDispatch();

  useEffect(() => {
    props.navigation.setOptions({ title: countryData.name });
  }, [])
  
  

  const getMoreWheatherInfo = async() => {
    setBtnText("Loading...");
    const wheatheryInfo = await getWheatherInfo(countryData.capital);
    if (wheatheryInfo.status) {
      dispatch(setWheatherInfo(wheatheryInfo.data))
      setStatus(true)
      props.navigation.navigate("MoreInfo");
    } else {
      setStatus(false)
    }
    setBtnText("Capital Wheather");
  }
  return (
    <>
      <Card>
        <Box style={styles.container} >
          <Box style={styles.imageContainer} >
            <Image source={{ uri: countryData.flags.png }} style={styles.flag} />
          </Box>
          <Box style={styles.infoContainer} >
            <Text style={styles.title} >Capital</Text>
            <Text style={styles.info} >{countryData.capital}</Text>
            <Text style={styles.title} >Population</Text>
            <Text style={styles.info} >{countryData.population}</Text>
            <Text style={styles.title} >Latitude and Longitude</Text>
            <Text style={styles.info} >{`${countryData.latlng[0]} - ${countryData.latlng[1]}`}</Text>
          </Box>
        </Box>
      </Card>
      {!status && <ErrorPopup onClose={() => setStatus(true)} 
          errorMsg={`No Data Found for ${countryData.capital}`} />}
      <Button onPress={getMoreWheatherInfo}
         width={windowWidth*0.7} alignSelf={'center'}
        name={btnText} endIcon={'rainy'} />
    </>
  )
}

export default WheatherInfo

const styles = StyleSheet.create({
  container:{
    alignItems:"center",
    justifyContent:"center",
    display:"flex",
  },

  imageContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    height: 100,
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