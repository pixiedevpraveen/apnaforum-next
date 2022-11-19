import { FC } from 'react'
import Head from 'next/head'
import Title from './Title'

const HeadTags: FC = ({ children }: any) => {

    return (
        <>
            <Title></Title>
            <Head>
                <meta name="description" content={process.env.NEXT_PUBLIC_DESCRIPTION} />
                <meta name="keywords" content={process.env.NEXT_PUBLIC_KEYWORDS} />
                <meta name="color-scheme" content="dark light" />
                <meta charSet="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <meta name="revisit-after" content="1 days" />
                <meta name="author" content="Team Pixiedevs" />

                {/* <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#96d2ff" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="msapplication-TileColor" content="#96d2ff" />
                <meta name="msapplication-config" content="/browserconfig.xml" />
                <meta name="theme-color" content="#ffffff" />
                <link rel="icon" href="/favicon.ico" /> */}
            </Head>
        </>
    )
}

export default HeadTags