module.exports = {
  baseUrl: '/improving-on-express/',
  chainWebpack: config => {
    config.module
      .rule('html')
      .test(/\.html$/)
      .use('html-loader')
        .loader('html-loader')
        .end();
  },
}