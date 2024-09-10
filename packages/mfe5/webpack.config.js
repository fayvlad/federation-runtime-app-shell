const {ModuleFederationPlugin} = require('@module-federation/enhanced');
const path = require('path');
module.exports = {
  output: {
    publicPath: "http://localhost:4201/",
  },
  plugins: [
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
      },
    })
  ]
}
