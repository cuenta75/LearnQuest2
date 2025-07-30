// next.config.js
/** @type {import('next').NextConfig} */
module.exports = {
  // Desactiva la optimización de imágenes para que Next.js sirva
  // los SVGs tal cual desde /public sin renombrarlos con query-strings
  images: {
    unoptimized: true,
  },
};
