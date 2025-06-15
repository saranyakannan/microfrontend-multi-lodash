const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devServer: {
    port: 3000,
    hot: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      remotes: {
        remoteA: "remoteA@http://localhost:3001/remoteEntry.js",
        remoteB: "remoteB@http://localhost:3002/remoteEntry.js", // Added remote B
      },
      shared: {
        react: {
          singleton: true,
          eager: false,
          requiredVersion: "^18.0.0",
        },
        "react-dom": {
          singleton: true,
          eager: false,
          requiredVersion: "^18.0.0",
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
