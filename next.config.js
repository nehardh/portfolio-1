import { withSentryConfig } from '@sentry/nextjs';

const nextConfig = {
  reactStrictMode: true,
  // Other configurations
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
};

const sentryConfig = {
  org: 'nehardh-m',
  project: 'javascript-nextjs',
  silent: !process.env.CI,
  widenClientFileUpload: true,
  reactComponentAnnotation: {
    enabled: true,
  },
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
};

// Export the final config
export default withSentryConfig(nextConfig, sentryConfig);
