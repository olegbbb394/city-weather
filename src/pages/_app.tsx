import {AppProps} from "next/app";
import {Provider} from "react-redux";
import {store} from "'@'/redux/store";
import Layout from "'@'/layout/layout";
import {ThemeProvider, createTheme} from '@mui/material';
import "'@'/styles/globals.scss";

const theme = createTheme({
    palette: {
        success: {
            main: '#4caf50'
        },
    },
    typography: {
        h3: {
            color: '#4caf50'
        },
        h4: {
            color: '#4caf50'
        },
        h5: {
            color: '#1c1d1c'
        }
    }
});

function App({Component, ...pageProps}: AppProps) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </Provider>
            </ThemeProvider>
        </>
    );
}

export default App;