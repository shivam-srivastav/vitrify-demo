// next.config.mjs
const nextConfig = {
    reactStrictMode: true,
    experimental: {
      serverActions: {},
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
      return config;
    },
  };
  
  export default nextConfig;