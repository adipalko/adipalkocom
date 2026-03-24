import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/movie-jar',
        destination: 'https://movie-jar.adipalko.com',
        permanent: false,
      },
      {
        source: '/hatraot',
        destination: 'https://hatraot.adipalko.com',
        permanent: false,
      },
      {
        source: '/finance-tracker',
        destination: 'https://financialtracker.adipalko.com',
        permanent: false,
      },
      {
        source: '/feedback-app',
        destination: 'https://feedback-app.adipalko.com',
        permanent: false,
      },
      {
        source: '/storycraft',
        destination: 'https://storycraft.adipalko.com',
        permanent: false,
      },
      {
        source: '/yogacurator',
        destination: 'https://yogacurator.adipalko.com',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;