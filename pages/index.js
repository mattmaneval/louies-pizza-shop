import Head from 'next/head';
import { GlobalStyle } from '../styles';
import GlobalHeader from '../components/GlobalHeader';
import Header from '../components/Header';
import Menu from '../components/navigation/Menu';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Louie's Pizza Shop</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <title>Louie's Pizza Shop — Fayette, Ohio</title>
        <meta name="title" content="Louie's Pizza Shop — Fayette, Ohio" />
        <meta name="description" content="Pizza, Subs, Wings, Calzones, Burgers, and Ice Cream. " />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Louie's Pizza Shop — Fayette, Ohio" />
        <meta property="og:description" content="Pizza, Subs, Wings, Calzones, Burgers, and Ice Cream. " />
        <meta property="og:image" content="/meta-tag-image.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Louie's Pizza Shop — Fayette, Ohio" />
        <meta property="twitter:description" content="Pizza, Subs, Wings, Calzones, Burgers, and Ice Cream. " />
        <meta property="twitter:image" content="/meta-tag-image.png" />
      </Head>
      <GlobalStyle />
      <GlobalHeader />
      <Header />
      <Menu />
      <Footer />
    </>
  );
}
