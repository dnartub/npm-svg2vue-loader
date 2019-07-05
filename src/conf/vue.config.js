module.exports = {
    chainWebpack: config => {
        config.module
            .rule('vsvg')
            .test(/\.vsvg$/)
            .use('svg2vue-loader')
            .loader('svg2vue-loader')
            .end();
    },
    configureWebpack: {
        // fix error: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
        resolve: {
            extensions: ['.ts'],
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            }
        }
    }
};
