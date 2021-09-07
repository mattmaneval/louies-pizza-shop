import Head from 'next/head';
import { GlobalStyle } from '../styles';
import Header from '../components/Header';
import Menu from '../components/navigation/Menu';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Louie's Pizza Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Header />
      <Menu />
      <Footer />
    </>
  );
}
