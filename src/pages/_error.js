import Link from 'next/link';

function Error({ statusCode }) {
  return (
    <div className='error-container'>
      <h1>Error {statusCode}</h1>
      <p>{statusCode === 404 ? "Pagina non trovata." : "Errore lato server o client."}</p>
      <Link href="/">Torna alla home</Link>
    </div>
  );
}
Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
export default Error;