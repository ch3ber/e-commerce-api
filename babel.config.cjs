module.exports = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
  plugins: [
    'add-module-exports',
    '@babel/plugin-transform-async-to-generator'
  ]
}
