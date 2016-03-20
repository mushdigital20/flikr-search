'use strict';

import config from '../config';
import gulp   from 'gulp';

gulp.task('watch', [], function() {

  global.isWatching = true;

  // Scripts are automatically watched and rebundled by Watchify inside Browserify task
  gulp.watch(config.scripts.src, ['lint']);
  gulp.watch(config.styles.sassSrc,  ['styles']);
  gulp.watch(config.styles.lessSrc,  ['styles']);
  gulp.watch(config.images.src,  ['images']);
  gulp.watch(config.fonts.src,   ['fonts']);
  gulp.watch(config.views.watch, ['views']);

});