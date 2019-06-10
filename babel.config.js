module.exports = {
  presets: [
    '@babel/preset-typescript',
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: 3
      }
    ]
  ],
  plugins: [
    'babel-plugin-styled-components',
    'react-hot-loader/babel',
    '@babel/plugin-proposal-class-properties'
  ]
};
