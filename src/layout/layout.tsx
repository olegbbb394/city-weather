import {ReactNode} from "react";

export const metadata = {
    title: 'Open Weather',
    description: 'Test task for React Dev',
}

type LayoutProps = {
    children: ReactNode;
};

const RootLayout = ({children}: LayoutProps): JSX.Element => {
    return (
        <>
            <html lang="en">
            <body>{children}</body>
            </html>
        </>
    );
};

export default RootLayout;