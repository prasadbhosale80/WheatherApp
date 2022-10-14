import axios from "axios";
export const getCountryData = async (countryName:String) => {
    try {
      const response = await axios.get(`https://restcountries.com/v2/name/${countryName.toLowerCase().trim()}`);
      const matcheCountry =  response.data.filter((item:any)=>{
        if (item.name.toLowerCase() === countryName.toLowerCase().trim()) {
          return item
        }
      })
      const countryData = {
        status: !response.data?.error,
        data: matcheCountry
      }
      return countryData
    } catch (error) {
     // console.error(error);
      const wheatherInfo = {
        status: false,
        data: []
      }
      return wheatherInfo
    }
  }