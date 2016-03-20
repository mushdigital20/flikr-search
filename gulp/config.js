'use strict';
import path from 'path';

let buildDir = './server/public';

export default {

  browserPort: 3000,
  UIPort: 3001,

  sourceDir: './app/',
  buildDir: buildDir,

  styles: {
    sassSrc: ['app/assets/styles/scss/**/*.scss'],
    lessSrc: ['app/assets/styles/less/**/*.less'],
    output: 'main.css',
    dest: path.join(buildDir,'stylesheets'),
    prodSourcemap: false,
    sassIncludePaths: ['bower_components/bootstrap-sass/assets/stylesheets'],
    lessIncludePaths: [],
  },
  
  app: {
      entryPoints: ['index.app.js', 'index.vendor.js']
  },

  scripts: {
    src: 'app/**/*.js',
    dest: path.join(buildDir,'javascripts')
  },

  images: {
    src: 'app/assets/images/**/*',
    dest: path.join(buildDir,'images')
  },

  fonts: {
    src: ['app/assets/fonts/**/*', 'bower_components/bootstrap-sass/assets/fonts'],
    dest: path.join(buildDir,'fonts')
  },

  assetExtensions: [
    'js',
    'css',
    'png',
    'jpe?g',
    'gif',
    'svg',
    'eot',
    'otf',
    'ttc',
    'ttf',
    'woff2?'
  ],

  views: {
    index: 'app/index.html',
    src: ['app/pages/**/*.html', 'app/directives/**/*.html'],
    dest: 'app'
  },

  gzip: {
    src: 'www/**/*.{html,xml,json,css,js,js.map,css.map}',
    dest: buildDir,
    options: {}
  },

  browserify: {
    bundleName: 'main.js',
    prodSourcemap: false
  },

  test: {
    karma: 'test/karma.conf.js',
    protractor: 'test/protractor.conf.js'
  },

  init: function() {
    this.views.watch = [
      this.views.index,
      this.views.src
    ];

    return this;
  }

}.init();
