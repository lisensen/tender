// vue.config.j
module.exports = {
    devServer: {
        // 端口号
        port: 8080,
        // 配置不同的后台API地址
        proxy: {
            '/admin': {
                target: 'http://oldboy.uicp.io',
                ws: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/admin': '/admin'
                }
            }
        },
        disableHostCheck: true
    },
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.json', '.vue', '.scss', '.css'],
            alias: {
            },
        },
        externals: {
            'vue': 'Vue',
            'vuex': 'Vuex',
            'axios':'axios',
        }
    }
}