const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  resolver: {
    // Add support for additional asset types
    assetExts: ['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg'],
    // Enable symlink following for better compatibility
    unstable_enableSymlinks: true,
  },
  transformer: {
    // Increase timeout for better Android compatibility
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  server: {
    // Enhanced server configuration for Android development
    port: 8081,
    enhanceMiddleware: (middleware) => {
      return (req, res, next) => {
        // Add CORS headers for Android emulator compatibility
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        return middleware(req, res, next);
      };
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
