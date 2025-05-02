import Head from 'next/head';
import Layout from '@/components/layout';

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>RitiroLibri.it | Contattaci</title>
        <meta name="description" content="Contattaci ora!" />
      </Head>
      <h1>Contattaci</h1>
      <p>Email: info@iltuobrand.com</p>
    </Layout>
  );
}
