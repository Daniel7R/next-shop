import { ProductList } from "@containers/ProductList";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Next Shop</title>
                <meta name="description" content="This a shop made in Next js" />
                <meta name="author" content="Carlos Daniel Rivera" />
            </Head>
            <ProductList />
        </>
    );
}
