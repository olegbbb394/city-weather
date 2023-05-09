import {ReactNode} from "react";

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({children}: LayoutProps): JSX.Element => {
    return (
        <>
            <html lang="en">
            <title>City weather</title>
            <meta name="description" content="city weather"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
            <body>{children}</body>
            </html>
        </>
    );
};

export default Layout;