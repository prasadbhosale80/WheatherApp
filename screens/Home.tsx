import { Box } from 'native-base';
import React, { useState } from 'react'
import Button from '../components/Button'
import { SafeAreaView, Image, StyleSheet } from 'react-native';
import InputField from '../components/InputField';
import { useDispatch } from 'react-redux';
import { setCountryData } from '../store/wheatherInfoSlice';
import ErrorPopup from '../components/ErrorPopup';
import { getCountryData } from '../api/getCountryData';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = (props: any) => {
  const [disableBtn, setDisableBtn] = useState(true);
  const [countryName, setCountryName] = useState<string>('');
  const [status, setStatus] = useState(true);
  const [btnText, setBtnText] = useState("Get Country Info")
  const dispatch = useDispatch();


  const getCountryInfoHandler = async () => {
    setBtnText("Loading...");
    const countryInfo = await getCountryData(countryName);
    
    if (countryInfo.status) {
      dispatch(setCountryData(countryInfo.data))
      setStatus(true)
      props.navigation.navigate("WheatherInfo");
    } else {
      setStatus(false)
    }
    setBtnText("Get Country Info");
  }
  const handleCityChange = (text: string) => {
    setStatus(true)
    setCountryName(text);
    if (text === '') {
      setDisableBtn(true)
    } else {
      setDisableBtn(false)
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }} >
      <Box style={styles.container} >
        <Box style={styles.imgContainer} >
          <Image source={require('../assets/cloud.gif')} style={styles.imageBorder} />
        </Box>
        {!status && <ErrorPopup onClose={() => setStatus(true)} 
          errorMsg={`No Data Found for Country ${countryName}`} />}
        <InputField
          onChangeText={handleCityChange}
          value={countryName}
          placeholder={"Enter Country Name"}
          keyboardType={"default"}
        />

        <Button onPress={getCountryInfoHandler}
          width={windowWidth*0.7} alignSelf={'center'}
          name={btnText} endIcon={'flag'}
          disable={disableBtn}
        />
      </Box>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    padding:2,
    display:'flex',
  },
  imageBorder: {
    height: "100%",
    width: "100%"
  },
  imgContainer:{
    justifyContent:'center', 
    alignSelf:'center', 
    height:200, 
    width:200, 
    margin:10, 
  }
})

export default Home