const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "semnome",
    projectName: "app-second",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    plugins: [
      new ModuleFederationPlugin({
        name: 'app-second',
        library: { type: 'system'},
        filename: 'remoteEntry.js',
        exposes: {
          index: './src/index'
        },
        shared: {
          'react': { requiredVersion: '^17.0.2', eager: true }, 
          'react-dom': { requiredVersion: '^17.0.2', eager: true }, 
          'single-spa-react': { requiredVersion: '^4.3.1', eager: true },
          'antd': { requiredVersion: '^4.20.3', eager: true },
          '@ant-design/icons': { requiredVersion: '^4.7.0', eager: true },
        },
      }),
    ]
  });
};
