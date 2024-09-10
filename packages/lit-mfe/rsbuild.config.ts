import { defineConfig } from '@rsbuild/core';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

export default defineConfig({
  html: {
    template: './src/index.html',
  },
  server: {
    port: 8002
  },
  dev: {
    assetPrefix: true,
  },
  output: {
    assetPrefix: '/'
  },
  tools: {
    rspack: {
      plugins: [
        new ModuleFederationPlugin({
          name: 'litApp',
          exposes: {
            './MFE': './src/MFE.ts',
          },
        }),
      ]
    }
  }
});
