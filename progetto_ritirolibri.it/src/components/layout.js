import Footer from '@/components/Footer';
import Navbar from '@/components/ui/Navbar';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export default function Layout({ children }) {
  return (
    <div className='layout-container'>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
