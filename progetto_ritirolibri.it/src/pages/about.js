import Head from 'next/head';
import Layout from '@/components/layout';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>RitiroLibri.it | Chi Siamo</title>
        <meta name="description" content="Scopri chi siamo, cosa facciamo e la nostra missione" />
      </Head>
      <h1>Chi siamo</h1>
      <p>Siamo un&apos;azienda innovativa...</p>
    </Layout>
  );
}
