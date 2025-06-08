/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Necesario para exportación estáta
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Configuración para generación estática
  trailingSlash: true,
  // Deshabilitar la generación de mapas de fuente para producción
  productionBrowserSourceMaps: false,
};

export default nextConfig;
