import Head from 'next/head';
import Layout from '@/components/layout';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <Layout>
        <title>RitiroLibri.it | Home</title>
        <meta name="description" content="Landing page moderna con Next.js" />
      <Hero/>
    </Layout>
  );
}

