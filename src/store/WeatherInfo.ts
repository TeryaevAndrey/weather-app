import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const key: string = "c4206edf19f35fc184f01a77bb9de40d";

interface WeatherInfo {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  rain: {
    "1h": number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

interface InitialState {
  weatherInfo: WeatherInfo;
  city: string;
  searchValue: string;
  loading: boolean;
  darkTheme: boolean;
  cityError: boolean;
}

export const getWeatherInfo = createAsyncThunk(
  "WeatherInfo/getWeatherInfo",
  async (city: string, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
      );

      dispatch(setLoading(false));
      dispatch(setWeatherInfo(res.data));
      dispatch(setCityError(false));
    } catch (err) {
      dispatch(setCityError(true));
    }
  }
);

const initialState: InitialState = {
  weatherInfo: {
    coord: {
      lon: 0,
      lat: 0,
    },
    weather: [
      {
        id: 0,
        main: "",
        description: "",
        icon: "",
      },
    ],
    base: "",
    main: {
      temp: 0,
      feels_like: 0,
      temp_min: 0,
      temp_max: 0,
      pressure: 0,
      humidity: 0,
      sea_level: 0,
      grnd_level: 0,
    },
    visibility: 0,
    wind: {
      speed: 0,
      deg: 0,
      gust: 0,
    },
    rain: {
      "1h": 0,
    },
    clouds: {
      all: 0,
    },
    dt: 0,
    sys: {
      type: 0,
      id: 0,
      country: "",
      sunrise: 0,
      sunset: 0,
    },
    timezone: 0,
    id: 0,
    name: "",
    cod: 0,
  },
  city: "Belgorod" || localStorage.getItem("city"),
  searchValue: "",
  loading: false,
  darkTheme: false,
  cityError: false,
};

export const WeatherInfoSlice = createSlice({
  name: "WeatherInfo",
  initialState,
  reducers: {
    setWeatherInfo: (state, action: PayloadAction<WeatherInfo>) => {
      state.weatherInfo = action.payload;
    },

    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },

    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    setTheme: (state, action: PayloadAction<boolean>) => {
      state.darkTheme = action.payload;
    },

    setCityError: (state, action: PayloadAction<boolean>) => {
      state.cityError = action.payload;
    },
  },
});

export const {
  setWeatherInfo,
  setCity,
  setSearchValue,
  setLoading,
  setTheme,
  setCityError,
} = WeatherInfoSlice.actions;
