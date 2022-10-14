import {createSlice} from '@reduxjs/toolkit'
const wheatherInfoSlice = createSlice({
    name:'wheatherInfoSlice',
    initialState:{
        wheatherInfo:[],
        countryData:[]
    },
    reducers:{
        setWheatherInfo:(state,action)=>{
            state.wheatherInfo=action.payload;
        },
        setCountryData:(state,action)=>{
            state.countryData=action.payload;
        }
    }
});

export const {setWheatherInfo, setCountryData} = wheatherInfoSlice.actions; 
export default wheatherInfoSlice.reducer;