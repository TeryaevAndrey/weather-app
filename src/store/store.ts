import { WeatherInfoSlice } from "./WeatherInfo";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    weatherInfo: WeatherInfoSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
