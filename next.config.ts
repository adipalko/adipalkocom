import type { NextConfig } from "next";

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/movie-jar',
        destination: 'https://moviejar1.netlify.app',
      },
      {
        source: '/hatraot',
        destination: 'https://hatraot.netlify.app',
      },
      {
        source: '/finance-tracker',
        destination: 'https://getfinancialtracker.netlify.app',
      },
      {
        source: '/feedback-app',
        destination: 'https://feedback-app-website.netlify.app',
      },
      {
        source: '/storycraft',
        destination: 'https://story-craft-io.netlify.app',
      },
      {
        source: '/yogacurator',
        destination: 'https://yogacurator.netlify.app',
      },
      {
        source: '/movie-jar/:path*',
        destination: 'https://moviejar1.netlify.app/:path*',
      },
      {
        source: '/hatraot/:path*',
        destination: 'https://hatraot.netlify.app/:path*',
      },

      {
        source: '/finance-tracker/:path*',
        destination: 'https://getfinancialtracker.netlify.app/:path*',
      },

      {
        source: '/feedback-app/:path*',
        destination: 'https://feedback-app-website.netlify.app/:path*',
      },

      {
        source: '/storycraft/:path*',
        destination: 'https://story-craft-io.netlify.app/:path*',
      },

      {
        source: '/yogacurator/:path*',
        destination: 'https://yogacurator.netlify.app/:path*',
      },
    ]
  },
}

export default nextConfig;
