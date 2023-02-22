const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

 mix.ts('resources/js/index.js', 'public/js')
 .sass('resources/sass/app.scss', 'public/css');
 mix.webpackConfig({
    devServer: {
        // proxy設定
        proxy: {
            '*': 'http://localhost:8080'
        }
    }
}).version()
.sourceMaps();