const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  output: {
    ...common.output,
    publicPath: "https://openpnrr.s3.eu-central-1.amazonaws.com/static/baton/app/dist/",
  },
  devtool: false,
})
