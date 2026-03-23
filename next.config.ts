import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/movie-jar',
        destination: 'https://moviejar1.netlify.app',
        permanent: false,
      },
      {
        source: '/hatraot',
        destination: 'https://hatraot.netlify.app',
        permanent: false,
      },
      {
        source: '/finance-tracker',
        destination: 'https://getfinancialtracker.netlify.app',
        permanent: false,
      },
      {
        source: '/feedback-app',
        destination: 'https://feedback-app-website.netlify.app',
        permanent: false,
      },
      {
        source: '/storycraft',
        destination: 'https://story-craft-io.netlify.app',
        permanent: false,
      },
      {
        source: '/yogacurator',
        destination: 'https://yogacurator.netlify.app',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
