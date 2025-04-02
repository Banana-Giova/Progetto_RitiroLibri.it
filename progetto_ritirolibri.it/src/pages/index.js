import Head from 'next/head';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Landing Page | Il tuo brand</title>
        <meta name="description" content="Landing page moderna con Next.js" />
      </Head>
      <h1>Benvenuto nella nostra landing page!</h1>
    </Layout>
  );
}

