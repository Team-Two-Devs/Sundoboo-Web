import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { Configuration } from 'webpack';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import { WebpackManifestPlugin } from 'webpack-manifest-plugin';

const PUB_DIR = path.join(__dirname, '/public');

const config: Configuration = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[id].js',
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
          }
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      },
      {
        test: /\.jfif$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Sundoboo',
      template: `${PUB_DIR}/index.html`,
      favicon: `${PUB_DIR}/favicon.ico`
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx']
    }),
    new WebpackManifestPlugin({
      fileName: 'manifest.json',
      basePath: './dist/'
    })
  ]
};

export default config;
