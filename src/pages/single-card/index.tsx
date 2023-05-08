import React, {FC} from "react";
import Link from "next/link";
import Image from "next/image";

import {useTypeSelector} from "'@'/hooks/use-type-selector";
import {selectWeatherItem} from "'@'/redux/reducers/weatherSlice";
import {PagesPathEnum} from "'@'/constants/pagesPath.enum";
import {Box, Card, Container, Typography, Grid} from "@mui/material";
import {HomeIcon} from "'@'/shared/home-icon"

const SingleCard: FC = (): JSX.Element => {
    const item = useTypeSelector(selectWeatherItem);

    return (
        <Container sx={{mt: '3 rem', mb: '3 rem'}}>
            <Link href={PagesPathEnum.MAIN_PAGE}>
                <Box
                    sx={{
                        '& > :not(style)': {
                            mt: 1,
                            mb: 4,
                        },
                    }}
                >
                    <HomeIcon color="success"/>
                </Box>
            </Link>
            <Card sx={{maxWidth: 1400}}>
                <Grid container sx={{maxWidth: 1200, mb: 1}} spacing={2}>
                    <Grid item>
                        <Box>
                            <Image
                                src={`https://openweathermap.org/img/wn/${item?.weather.map((item) => item.icon)}@2x.png`}
                                width={150}
                                height={150}
                                alt={'weather'}>
                            </Image>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box>
                            <Typography variant="h4" component="div" color='success'>
                                {item?.name}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Typography variant="h5" color="text.secondary">
                    {Math.round(item?.main?.temp)}&deg;
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    pressure: {item?.main?.pressure}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    description: {item?.weather.map((item) => item.description)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    main: {item?.weather.map((item) => item.main)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    wind: {item?.wind?.speed} {'km/h'}
                </Typography>
            </Card>
        </Container>
    )
}

export default SingleCard;