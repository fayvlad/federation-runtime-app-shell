import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';
import { defineConfig } from '@rsbuild/core';

export default defineConfig({
    server: {
        port: 8000
    },
    tools: {
        rspack: {
            plugins: [
                new ModuleFederationPlugin({
                    name: 'shell',

                    /**
                     * Enable remotes in development for remote type generation
                     * See: https://module-federation.io/guide/basic/runtime.html#differences-between-build-plugins-and-runtime
                     * See: https://module-federation.io/guide/basic/type-prompt.html
                     */

                    // remotes: {
                    //     reactApp: 'reactApp@http://localhost:8001/mf-manifest.json',
                    //     litApp: 'litApp@http://localhost:8002/mf-manifest.json',
                    // }
                }),
            ]
        }
    }
});