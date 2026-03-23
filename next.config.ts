import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/movie-jar',
        destination: 'https://movie-jar-three.vercel.app/',
        permanent: false,
      },
      {
        source: '/hatraot',
        destination: 'https://hatraot.vercel.app/',
        permanent: false,
      },
      {
        source: '/finance-tracker',
        destination: 'https://financial-tracker-delta-snowy.vercel.app/',
        permanent: false,
      },
      {
        source: '/feedback-app',
        destination: 'https://feedback-app-website.vercel.app/',
        permanent: false,
      },
      {
        source: '/storycraft',
        destination: 'https://story-craft-nine.vercel.app/',
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
