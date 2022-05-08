const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "semnome",
    projectName: "stylesheet",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                additionalData: `$urlimage: "${process.env.URL_IMAGES}/";`
              }
            },
            {
              loader: 'sass-resources-loader',
              options: {
                resources: ['src/assets/styles/Theme.scss']
              }
            }
          ]
        }
      ]
    },
  });
};
