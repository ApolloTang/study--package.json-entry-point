const { WebpackPluginServe } = require("webpack-plugin-serve")

const jsLoader = () => {
  const out = {
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.tsx', '.js' ]
    }
  }
  return out
}

module.exports = jsLoader
