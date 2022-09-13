import { useAppSelector } from "./hooks";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const key: string = "c4206edf19f35fc184f01a77bb9de40d";

interface InitialState {
  weatherInfo: {};
  city: string;
  searchValue: string;
}

export const getWeatherInfo = createAsyncThunk(
  "WeatherInfo/getWeatherInfo", 
  async (city: string, {dispatch}) => {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
    dispatch(setWeatherInfo(res.data));
  }
);

const initialState: InitialState = {
  weatherInfo: {},
  city: "Belgorod" || localStorage.getItem("city"),
  searchValue: ""
};

export const WeatherInfoSlice = createSlice({
  name: "WeatherInfo",
  initialState,
  reducers: {
    setWeatherInfo: (state, action: PayloadAction<object>) => {
      state.weatherInfo = action.payload;
    },
    
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },

    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    }
  }
});

export const {setWeatherInfo, setCity, setSearchValue} = WeatherInfoSlice.actions;