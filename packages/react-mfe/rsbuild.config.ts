import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    port: 8001
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
          name: 'reactApp',
          exposes: {
            './MFE': './src/MFE',
          },
        }),
      ]
    }
  }
});
