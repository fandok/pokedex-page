const nextTranslate = require("next-translate");

/** @type {import('next').NextConfig} */
module.exports = nextTranslate({
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
    ],
  },
});
