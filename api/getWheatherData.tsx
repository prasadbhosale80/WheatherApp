import axios from 'axios';

export const getWheatherInfo = async (cityName:String) => {
    try {
      const response = await axios.get(`http://api.weatherstack.com/current?access_key=a5cae1281aed20d95f510d506cb0d86f&query=${cityName.toLowerCase()}`);
      const wheatherInfo = {
        status: response.data?.location,
        data: response.data
      }      
      return wheatherInfo
    } catch (error) {
     // console.error(error);
      const wheatherInfo = {
        status: false,
        data: []
      }
      return wheatherInfo
    }
  }
