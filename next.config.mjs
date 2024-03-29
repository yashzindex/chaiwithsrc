/** @type {import('next').NextConfig} */
// const { i18n } = "./next-i18next.config";
const nextConfig = {
  i18n: {
    locales: ["en", "zh"],
    defaultLocale: "en",
  },
  reactStrictMode: true,
};

export default nextConfig;
