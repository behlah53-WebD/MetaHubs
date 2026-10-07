/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/Metahubs%20Home%20v2.dc.html',
        destination: '/',
      },
      {
        source: '/Metahubs Home v2.dc.html',
        destination: '/',
      },
      {
        source: '/metahubs-home-v2',
        destination: '/',
      },
      {
        source: '/Metahubs%20Product.dc.html',
        destination: '/product',
      },
      {
        source: '/Metahubs Product.dc.html',
        destination: '/product',
      },
      {
        source: '/Metahubs%20Impact.dc.html',
        destination: '/impact',
      },
      {
        source: '/Metahubs Impact.dc.html',
        destination: '/impact',
      },
      {
        source: '/Metahubs%20Workflows.dc.html',
        destination: '/workflows',
      },
      {
        source: '/Metahubs Workflows.dc.html',
        destination: '/workflows',
      },
      {
        source: '/Metahubs%20Pricing.dc.html',
        destination: '/pricing',
      },
      {
        source: '/Metahubs Pricing.dc.html',
        destination: '/pricing',
      },
      {
        source: '/Metahubs%20Security.dc.html',
        destination: '/security',
      },
      {
        source: '/Metahubs Security.dc.html',
        destination: '/security',
      },
      {
        source: '/Metahubs%20Home.dc.html',
        destination: '/metahubs-home',
      },
      {
        source: '/Metahubs Home.dc.html',
        destination: '/metahubs-home',
      },
      {
        source: '/Boomerang%20Home.dc.html',
        destination: '/boomerang-home',
      },
      {
        source: '/Boomerang Home.dc.html',
        destination: '/boomerang-home',
      },
      {
        source: '/Site%20Header.dc.html',
        destination: '/site-header',
      },
      {
        source: '/Site Header.dc.html',
        destination: '/site-header',
      },
      {
        source: '/Site%20Footer.dc.html',
        destination: '/site-footer',
      },
      {
        source: '/Site Footer.dc.html',
        destination: '/site-footer',
      },
    ];
  },
};

export default nextConfig;
