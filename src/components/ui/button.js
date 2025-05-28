import Link from 'next/link';

const Button = ({ href = '#', children, type = 'primary' }) => {
  return (
    <Link href={href} className={`btn ${type}`}>
      {children}
    </Link>
  );
}

export default Button;
