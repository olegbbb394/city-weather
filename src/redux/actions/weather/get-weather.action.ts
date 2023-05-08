import {AppThunk} from "'@'/redux/store";
import {setWeatherDataArr} from "'@'/redux/reducers/weatherSlice";
import {getWeatherById} from "'@'/api/open-weather/open-weather.api";
import {IWeatherItem} from "'@'/models/weather.model";
import {BaseSettings} from "'@'/constants/base-settings.enum";

export const getWeatherAction = (id: number): AppThunk => async dispatch => {
    const response = await getWeatherById(id);

    if (response) {
        const cards = localStorage.getItem(BaseSettings.localStorageKey);
        const parseCards = cards ? JSON.parse(cards) : [];

        if (!parseCards.find((item: IWeatherItem) => item.id === id)) {
            parseCards.push(response);
        }

        localStorage.setItem(BaseSettings.localStorageKey, JSON.stringify(parseCards))
        dispatch(setWeatherDataArr(parseCards));
    }
}
