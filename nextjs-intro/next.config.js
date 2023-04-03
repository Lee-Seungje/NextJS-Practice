/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = {
  reactStrictMode: true,
  swcMinify: true,

  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/form",
        permanent: false,
      },
    ];
  },
  async rewriters() {
    return [
      {
        source: "/post",
        destination:
          "https://port-0-idea-archive-server-p8xrq2mlfszgkzn.sel3.cloudtype.app",
      },
    ];
  },
};
