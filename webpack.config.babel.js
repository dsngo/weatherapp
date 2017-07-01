import { resolve } from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export default env => {
  const config = {
    entry: resolve(__dirname, 'app/index.jsx'),
    output: {
      path: resolve(__dirname, 'public'),
      filename: `[name]-bundle.js`,
      publicPath: '',
      pathinfo: true,
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
      historyApiFallback: true,
    },
    resolve: {
      extensions: ['.json', '.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          include: resolve(__dirname, 'app'),
          use: 'babel-loader',
        },
        {
          test: /\.css$/,
          include: resolve(__dirname, 'app'),
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: resolve(__dirname, 'app/index.html'),
      }),
    ],
  };
  // Production config
  if (env.prod) {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),
      new webpack.optimize.CommonsChunkPlugin({ name: 'manifest' }),
      new BundleAnalyzerPlugin()
    );
    config.devtool = 'hidden-source-map';
    config.output.pathinfo = false;
  }
  return config;
};
