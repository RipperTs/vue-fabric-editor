const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: './', // 此处改为 './' 即可
  productionSourceMap: false,
  devServer: {
    port: 3100,
  }
});
