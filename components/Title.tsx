import Head from "next/head";
import { FC } from "react";

const Title: FC<{ children?: string }> = ({ children }) => {
    return (
        <Head>
            <title>{children ? `${children} | ${process.env.NEXT_PUBLIC_APP_NAME}` : process.env.NEXT_PUBLIC_APP_NAME}</title>
        </ Head>
    )
}

export default Title