import '@styles/globals.css';
import { AppContext } from '@context/AppContext';
import { useInitialState } from '@hooks/useInitialState';
import { Header } from "@components/Header";
import Head from 'next/head';
import Script from 'next/script';

function MyApp({Component, pageProps}) {
    const initialState= useInitialState();

    return (
    <AppContext.Provider value={initialState}>
        <Head>    
            <link rel="shortcut icon" href="/favicon_yard_sale.svg" />
        </Head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-KGQ41PY7L0" strategy='afterInteractive' />
        <Script id='google-analytics' strategy='afterInteractive'>
            {`                   
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-KGQ41PY7L0');
            `}
        </Script>
        <Header />
        <Component {...pageProps} />
    </AppContext.Provider>
    );
}

export default MyApp;