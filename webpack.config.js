/* eslint-disable @typescript-eslint/no-var-requires */

// IMPORTS
const CopyWebpackPublin = require('copy-webpack-plugin');
const dotenv = require('dotenv').config();
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

// LOCAL UTIL FUNCTION
const toAbsolute = (...paths) => path.resolve(__dirname, ...paths);

// PATHS
const assets = 'assets';
const pathTo = {
  client: toAbsolute('src', 'client', 'index.tsx'),
  content: toAbsolute('build'),
  index: toAbsolute('src', 'client', 'index.html'),
  server: toAbsolute('src', 'server', 'index.ts'),
  src: toAbsolute('src'),
};

// ENVIRONMENT VARIABLES
const environmentindex = process.argv.findIndex((value) => value === '--env');
const environment = environmentindex > 0 && process.argv[environmentindex + 1];
const isDevelopment = environment === 'dev';

console.log(`Creating ${isDevelopment ? 'DEV' : 'PROD'} build`, environment);

// CREATE CONFIG
const configCreator = ({ isServer }) => ({
  ...(isDevelopment
    ? {
        devServer: {
          contentBase: pathTo.content,
          compress: false,
          historyApiFallback: true,
          historyApiFallback: {
            rewrites: [
              { from: /^\/$/, to: 'index.html' },
              {
                from: /^\/favicon.ico$/,
                to: `/${assets}/favicon.ico`,
              },
            ],
          },
          hot: true,
          host: 'localhost',
          onListening: (server) => {
            const port = server.listeningApp.address().port;
            console.log('Listening on port:', port);
          },
          open: true,
          port: 3000,
          publicPath: '/',
          writeToDisk: (filePath) => !/.(css|html|js|json|map)$/.test(filePath),
        },
        devtool: 'source-map',
        entry: {
          client: pathTo.client,
        },
        mode: 'development',
      }
    : {
        entry: isServer ? { server: pathTo.server } : { client: pathTo.client },
        mode: 'production',
      }),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: `/${assets}/`,
            },
          },
          'css-loader',
          ...(isDevelopment ? ['sass-loader'] : []),
        ],
      },
    ],
  },
  optimization: isServer
    ? {}
    : {
        splitChunks: { chunks: 'all' },
      },
  output: {
    filename: ({ chunk: { name = 'vendors' }, hash }) =>
      `${assets}/${name}.${isDevelopment ? hash : 'bundle'}.js`,
    path: pathTo.content,
    publicPath: '/',
  },
  plugins: isServer
    ? [
        new webpack.DefinePlugin({
          SVR_PORT: JSON.stringify(dotenv.parsed.SVR_PORT),
        }),
      ]
    : [
        new CopyWebpackPublin({
          patterns: [
            { from: 'static/shared', to: assets },
            { from: isDevelopment ? 'static/dev' : 'static/prod', to: assets },
          ],
        }),
        new webpack.DefinePlugin({
          BASE_URL: JSON.stringify(
            (dotenv.parsed && dotenv.parsed.BASE_URL) ||
              'http://localhost/3001/api/v1', // Fallback URL
          ),
          IS_DEVELOPMENT: JSON.stringify(isDevelopment),
        }),
        new MiniCssExtractPlugin({
          filename: ({ chunk: { name }, hash }) =>
            `${assets}/${name}.${isDevelopment ? hash : 'bundle'}.css`,
        }),
        new HtmlWebpackPlugin({
          filename: './index.html',
          template: pathTo.index,
        }),
      ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: ['node_modules', pathTo.src],
  },
  target: isServer ? 'node' : 'web',
});

module.exports = isDevelopment
  ? [configCreator({})]
  : [configCreator({ isServer: true }), configCreator({})];
