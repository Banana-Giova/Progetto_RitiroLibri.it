import Head from 'next/head';
import Layout from '@/components/layout';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>RitiroLibri.it | Chi siamo</title>
        <meta name="description" content="Scopri chi siamo e cosa facciamo" />
      </Head>
      <h1>Chi siamo</h1>
      <p>Siamo un&apos;azienda innovativa...</p>
    </Layout>
  );
}
