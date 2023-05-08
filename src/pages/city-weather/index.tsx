import React, {FC, useEffect,} from 'react';

import {useTypeDispatch} from "'@'/hooks/use-type-dispatch";
import {getWeatherAction} from "'@'/redux/actions/weather/get-weather.action";
import {selectWeatherData} from "'@'/redux/reducers/weatherSlice";
import {useTypeSelector} from "'@'/hooks/use-type-selector";

import {BaseSettings} from "'@'/constants/base-settings.enum";
import {IWeatherItem} from "'@'/models/weather.model";
import {keyGeneratorUtil} from "'@'/utils/key-generator";

import {CardItem} from "'@'/modules/card-item/card-item";
import {Box, FormControl, InputLabel, MenuItem, Typography, Select, Container, SelectChangeEvent} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"

const CityWeather: FC = (): JSX.Element => {
    const data = useTypeSelector(selectWeatherData);
    const dispatch = useTypeDispatch();

    const handleChange = (event: SelectChangeEvent<number>) => {
        if (event.target.value) {
            const id = event.target.value;
            dispatch(getWeatherAction(+id));
        }
    }

    useEffect(() => {
        const cards = localStorage.getItem(BaseSettings.localStorageKey);
        const parseCards = cards ? JSON.parse(cards) : [];
        if (parseCards) {
            parseCards.forEach((item: IWeatherItem) => dispatch(getWeatherAction(item.id)))
        }
    }, []);

    return (
        <Container sx={{mt: '3 rem', mb: '3 rem'}}>
            <header>
                <Typography variant={'h3'} component={'h1'}>
                    City weather
                </Typography>
            </header>
            <section>
                <Box sx={{minWidth: 200}}>
                    <FormControl sx={{mb: 2, mt: 2, minWidth: 200}}>
                        <InputLabel id="select-label">City</InputLabel>
                        <Select
                            labelId="select-label"
                            id="select-label"
                            label="City"
                            color='success'
                            onChange={handleChange}
                        >
                            <MenuItem value={703448}>Kyiv</MenuItem>
                            <MenuItem value={698740}>Odesa</MenuItem>
                            <MenuItem value={703845}>Kryvyi Rih</MenuItem>
                            <MenuItem value={709930}>Dnipro</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </section>
            <section>
                <Grid container sx={{mt: 2}} spacing={2}>
                    {!!data && data.map((item: IWeatherItem, i: number) => (
                        <div key={keyGeneratorUtil(i, CityWeather.name)}>
                            <CardItem item={item}/>
                        </div>
                    ))}
                </Grid>
            </section>
        </Container>
    );
};
export default CityWeather;


