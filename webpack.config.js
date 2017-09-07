const path = require("path"),
      webpack = require("webpack"),
      production = process.env.NODE_ENV === "production",
      appRoot = path.resolve(__dirname, "app");

module.exports = {
  devtool: production? "source-map" : "cheap-module-eval-source-map",
  devServer: {
    contentBase: "./build",
    hotOnly: true
  },
  entry: {
    app: [
      "react-hot-loader/patch",
      "./app"
    ]
  },
  plugins: [
    production ? null : new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development")
    }),
    production?
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          dead_code: true,
          properties: true,
          drop_debugger: true,
          drop_console: true,
          unused: true,
          join_vars: true,
          warnings: false
        },
        sourceMap: true
      })
    :
      null
  ].filter(Boolean),
  module: {
    rules:[
      {
        test: /\.js$/,
        include: appRoot,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["es2015", { "modules": false }], "react", "stage-0"],
            plugins: ["react-hot-loader/babel","transform-runtime"]
          }
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  /* webpack-requirements: resolve-root */
  resolve: {
    modules: [
      appRoot,
      "node_modules"
    ]
  }
}
