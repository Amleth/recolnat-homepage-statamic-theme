const connect = require('gulp-connect-php');
const gulp = require('gulp');
const elixir = require('laravel-elixir');
require('laravel-elixir-remove');
const watch = require('gulp-watch');

elixir.config.assetsPath = './';
const theme = 'erecolnat';
const themecss = 'css/' + theme + '.css';

elixir(function (mix) {
  mix.remove(themecss);
  mix.sass('./styles/*.scss', themecss);
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
      '../node_modules/js-cookie/src/js.cookie.js',
    ],
    './js/erecolnat.js'
  );
});

gulp.task('connect', () => {
  connect.server({port: 8080, base: '../../..'});
});
