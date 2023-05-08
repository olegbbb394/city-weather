import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {IWeatherItem} from "'@'/models/weather.model";
import {RootState} from "'@'/redux/store";

interface IWeatherState {
    weatherDataArr: IWeatherItem[];
    weatherDataItem: IWeatherItem;
}

const initialState: IWeatherState = {
    weatherDataArr: [],
    weatherDataItem: null!,
};

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setWeatherDataArr: (state: IWeatherState, action: PayloadAction<IWeatherItem[]>) => {
            state.weatherDataArr = action.payload;
        },
        setWeatherDataItem: (state: IWeatherState, action: PayloadAction<IWeatherItem>) => {
            state.weatherDataItem= action.payload;
        },
    },
});

export const { setWeatherDataArr, setWeatherDataItem} = weatherSlice.actions;
export const weatherReducer = weatherSlice.reducer;
export const selectWeatherData = (state: RootState) => state.weather.weatherDataArr;
export const selectWeatherItem = (state: RootState) => state.weather.weatherDataItem;