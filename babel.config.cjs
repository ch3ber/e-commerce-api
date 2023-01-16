module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript'
  ],
  plugins: [
    '@babel/plugin-transform-async-to-generator',
    ['module-resolver', {
      root: ['.'],
      alias: {
        '@config': './src/config/',
        '@db': './src/db/',
        '@libs': './src/libs/',
        '@routes': './src/routes/',
        '@middlewares': './src/middlewares/',
        '@schemas': './src/schemas/',
        '@services': './src/services/',
        '@utils': './src/utils/',
        '@app': './src/app.ts'
      }
    }]
  ]
}
