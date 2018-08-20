let webpack  = require('webpack')

module.exports = {
    devServer: {
        port: 9000,
        proxy: {
            "/user/api/v1": {
              target: "http://"+ process.env.AXIOS_HOST +":"+ process.env.AXIOS_PORT,
              changeOrigin: true,
            }
          }, // 设置代理
       },
       configureWebpack: {
        plugins: [
          new webpack.ProvidePlugin({ //配置全局变量
            Vue: 'vue',
            Vuex: 'vuex',
            _: 'lodash',
          }),
        ]
      }
}