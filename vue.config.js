// eslint-disable-next-line @typescript-eslint/no-var-requires
const { GenerateSW } = require('workbox-webpack-plugin')

module.exports = {
  pages: {
    index: {
      entry: 'src/main.ts', // 必須パラメータ
      title: process.env.VUE_APP_TITLE,
    },
  },

  publicPath: process.env.VUE_APP_PUBLIC_PATH,
  productionSourceMap: process.env.NODE_ENV !== 'production',

  transpileDependencies: ['vuetify'],

  // PWA
  configureWebpack: (config) => {
    config.plugins.push(
      new GenerateSW({
        skipWaiting: true,
      }),
    )
  },
}
