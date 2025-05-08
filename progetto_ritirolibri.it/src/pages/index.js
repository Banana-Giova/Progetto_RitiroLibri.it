import Head from 'next/head';
import Hero from '@/components/Hero';

const Home = () => {
  return (
    <>
      <Head>
        <title>RitiroLibri.it | Ritiro Gratis Libri Usati a Domicilio</title>
        <meta
          name="description"
          content="Hai libri usati da smaltire? RitiroLibri.it li ritira gratuitamente a casa tua. Contattaci ora per liberare spazio velocemente!"
        />
      </Head>

      <div className="home-container">
        <Hero />
      </div>
    </>
  );
}

export default Home;