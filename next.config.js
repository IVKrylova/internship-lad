module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  images: {
    domains: ["reqres.in", "via.placeholder.com", "img.freepik.com"],
    formats: ["image/avif", "image/webp"],
  },
};
