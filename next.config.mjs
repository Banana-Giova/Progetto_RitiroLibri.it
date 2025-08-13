/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  exportTrailingSlash: true,
  trailingSlash: true,
};

export default nextConfig;
