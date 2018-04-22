const path = require("path"),
      webpack = require("webpack"),
      production = process.env.NODE_ENV === "production",
      appRoot = path.resolve(__dirname, "app");

/*
    Babel Plugin ENV should be using browserslist in production
    or my custom config here in development.
    transform-es2015-arrow-functions is included because Babel
    doesn't properly transform them as of 2018-04-22
*/
const envOptions = production
  ? { modules: false }
  : {
      modules: false,
      targets: {
        browsers: ["last 1 Chrome version"]
      },
      include: ["transform-es2015-arrow-functions"]
    }

module.exports = {
  devtool: production? "source-map" : "cheap-module-eval-source-map",
  devServer: {
    contentBase: "./build",
    hotOnly: true
  },
  entry: {
    app: [
      production ? "babel-polyfill" : null,
      "./app"
    ].filter(Boolean)
  },
  plugins: [
    production ? null : new webpack.NamedModulesPlugin(),
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
        // mangle: false,
        // beautify: true
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
            presets: [["env", envOptions], "react", "stage-0"],
            plugins: [
              production ? null : "react-hot-loader/babel",
              /*
                We only want transform runtime for the helpers it provides
                such as:
                  - classCallCheck
                  - _extends
                  - createClass
                We are using babel-polyfill for everything else.
              */
              [
                "transform-runtime",
                {
                  "polyfill": false,
                  "regenerator": false,
                }
              ]
            ].filter(Boolean)
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
