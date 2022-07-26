import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CatalogPreviews from '../components/homepage/CatalogPreviews';
import ContentProduct from '../components/homepage/ContentProduct';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>

      <main className="content container">
        <ContentProduct></ContentProduct>

        <CatalogPreviews></CatalogPreviews>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}
