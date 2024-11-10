const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const debug = require("debug")("nav");

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "lekozhe";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "nav",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  const final = {
    ...defaultConfig,
    devServer: {
      ...defaultConfig.devServer,
      port: "9002",
      https: Boolean(process.env.HTTPS),
    },
    externals: [/^@lekozhe\//],
    output: {
      ...defaultConfig.output,
      filename: "main.js",
    },
    stats: "errors-warnings",
  };

  debug(final);

  return final;
};
