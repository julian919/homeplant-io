import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://res.cloudinary.com/**')],
  },
  sassOptions: {
    additionalData: `@use '@/assets/scss/colors.scss' as *;@use '@/assets/scss/fonts.scss' as *;`,
  },
};

export default nextConfig;
