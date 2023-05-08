import React, {FC} from 'react';
import Link from 'next/link';
import Image from "next/image";

import {IWeather, IWeatherItem} from "'@'/models/weather.model";
import {PagesPathEnum} from "'@'/constants/pagesPath.enum";

import {setWeatherDataArr, setWeatherDataItem} from "'@'/redux/reducers/weatherSlice";
import {useTypeDispatch} from "'@'/hooks/use-type-dispatch";
import {getWeatherAction} from "'@'/redux/actions/weather/get-weather.action";

import Grid from "@mui/material/Unstable_Grid2";
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {BaseSettings} from "'@'/constants/base-settings.enum";

type Props = {
    item: IWeatherItem;
};

export const CardItem: FC<Props> = ({item}: Props): JSX.Element => {
    const dispatch = useTypeDispatch();

    const deleteCard = (id: number): void => {
        const dataArr = JSON.parse(localStorage.getItem(BaseSettings.localStorageKey) || '');
        const filterArr = dataArr?.filter((item: IWeatherItem) => item.id !== id);
        localStorage.setItem(BaseSettings.localStorageKey, JSON.stringify(filterArr))
        dispatch(setWeatherDataArr(filterArr));
    }

    const updateCard = (id: number) => {
        if (id) dispatch(getWeatherAction(id));
    }

    const idCard = (id: number) => {
        if (item.id === id) dispatch(setWeatherDataItem(item));
    }

    return (
        <Grid xs={12} md={2}>
            <Card sx={{width: 250, border: '1px solid #4caf50'}}>
                <Link href={`${PagesPathEnum.CARD_PAGE}`} onClick={() => idCard(item.id)}>
                    <Image
                        src={`https://openweathermap.org/img/wn/${item?.weather.map((item) => item.icon)}@2x.png`}
                        width={70}
                        height={70}
                        alt={'weather'}>
                    </Image>
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="h4">
                            {item?.name}
                        </Typography>
                        <Typography variant="h5" component="h5">
                            {Math.round(item?.main?.temp)}&deg;
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            pressure: {item?.main?.pressure} {'hPa'}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            description: {item?.weather.map((item: IWeather) => item.description)}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            main: {item?.weather.map((item: IWeather) => item.main)}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            wind: {item?.wind?.speed} {'km/h'}
                        </Typography>
                    </CardContent>
                </Link>
                <CardActions>
                    <Button size="small" variant="outlined" color='success' sx={{mr: 1}}
                            onClick={() => deleteCard(item.id)}>Delete
                        card</Button>
                    <Button size="small" variant="outlined" color='success' onClick={() => updateCard(item.id)}>Update
                        card</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};
