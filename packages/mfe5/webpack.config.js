const {ModuleFederationPlugin} = require('@module-federation/enhanced');
const path = require('path');
module.exports = async (config, options, targetOptions) => {
  config.output.publicPath = config.mode === 'production' ? 'https://document-upload-module-host.preprod.accuris.dev' : "http://localhost:4201/";

  if (config.mode === 'production' || targetOptions.configuration === 'mfe') {
    config.plugins.push(
      new ModuleFederationPlugin({
        name: 'angularApp',
        exposes: {
          './Component': path.resolve(__dirname, './src/app/app.component.ts'),
        },
        shared: {
          'zone.js': {singleton: true, eager: true, lib: () => import('zone.js')},
          '@angular/core': {singleton: true, strictVersion: false, requiredVersion: 'auto'},
          '@angular/common': {singleton: true, strictVersion: false, requiredVersion: 'auto'},
          '@angular/router': {singleton: true, strictVersion: false, requiredVersion: 'auto'},
          '@epd/pattern-library': {singleton: true, strictVersion: false, requiredVersion: 'auto'},
        },
        remotes: {},
      })
    );
  }

  return config;
};
