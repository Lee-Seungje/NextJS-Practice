/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};
const URL =
  "https://port-0-idea-archive-server-p8xrq2mlfszgkzn.sel3.cloudtype.app";

module.exports = {
  reactStrictMode: true,
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
        destination: URL,
      },
    ];
  },
};
