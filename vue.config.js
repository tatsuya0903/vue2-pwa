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
}
