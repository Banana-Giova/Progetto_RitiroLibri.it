import Footer from '@/components/ui/Footer';

export default function Layout({ children }) {
  return (
    <div className='layout-container'>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
