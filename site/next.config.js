/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'LSN KASM Repository',
    description: 'Lets store some Container.',
    icon: '/img/logo.svg',
    listUrl: 'https://asatyr2018.github.io/kasm_lsn_repo/1.0/',
    contactUrl: 'https://about:notAtThemoMent',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
