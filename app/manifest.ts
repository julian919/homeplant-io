import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Homeplant IO',
    short_name: 'Homeplant',
    description: 'Your personal guide to home plant care.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f9f8f4',
    theme_color: '#7a8d5d',
    icons: [
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
