import '../styles/globals.css';
import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Karl Chareyre</title>
        <meta name="description" content="Designer pluridisciplinaire depuis 5 ans, ma récente formation à La Capsule a enrichi mon expertise en intégration, ajoutant une dimension technologique à mon approche créative." />
        <link rel="icon" type="image/png" href="/favicon.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
