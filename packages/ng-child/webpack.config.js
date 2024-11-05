const { ModuleFederationPlugin } = require("@module-federation/enhanced");
const path = require("path");
module.exports = {
  output: {
    publicPath: "http://localhost:4202/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "ngChild",
      exposes: {
        "./ChildComponent": path.resolve(__dirname, "./src/app/app.component.ts"),
      },
      shareStrategy: {
        "zone.js": {
          singleton: true,
          eager: true,
          lib: () => import("zone.js"),
        },
        "@angular/core": {
          singleton: true,
          strictVersion: false,
          requiredVersion: "auto",
        },
        "@angular/common": {
          singleton: true,
          strictVersion: false,
          requiredVersion: "auto",
        },
        "@angular/router": {
          singleton: true,
          strictVersion: false,
          requiredVersion: "auto",
        },
      },
      dts: {
        generateTypes: {
          compileInChildProcess: false,
        },
      }
    }),
  ],
};
