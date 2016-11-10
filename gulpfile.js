var elixir = require('laravel-elixir');
var gulp = require('gulp');
var theme = 'erecolnat';
var watch = require('gulp-watch');
elixir.config.assetsPath = './';
require('laravel-elixir-remove');

const themecss = 'css/' + theme + '.css';

elixir(function (mix) {
  mix.remove(themecss);
  mix.sass('*.scss', themecss);
  mix.styles([
      './fonts/ikaros/stylesheet.css',
      './node_modules/normalizecss/normalize.css',
      themecss
    ],
    themecss
  )
  .copy("./fonts/ikaros/*.woff", "css")
  .copy("./fonts/ikaros/*.woff2", "css");
  mix.scripts([
      'js/responsiveslides.min.js',
      'js/src-erecolnat.js',
      '../node_modules/superagent/superagent.js',
      '../node_modules/js-cookie/src/js.cookie.js',
    ],
    './js/erecolnat.js'
  );
});