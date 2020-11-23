const mix = require('laravel-mix')

mix
  .js('src/js/application.js', 'assets')
  .sass('src/scss/application.scss', 'assets')

mix.webpackConfig({
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js', // 'vue/dist/vue.esm-bundler.js', for vue3
    },
  },
})
