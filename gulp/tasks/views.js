'use strict';

import config        from '../config';
import gulp          from 'gulp';
import browserSync   from 'browser-sync';
import merge         from 'merge-stream';
import templateCache from 'gulp-angular-templatecache';

// Views task
gulp.task('views', function() {

    // we dont need the index.html using Express Layout
  // Put our index.html in the dist folder
  //const indexFile = gulp.src(config.views.index)
  //  .pipe(gulp.dest(config.buildDir));

  // Process any other view files from app/views
  //const views =
   return gulp.src(config.views.src)
    .pipe(templateCache({
      standalone: true
    }))
    .pipe(gulp.dest(config.views.dest))
    .pipe(browserSync.stream());

  //return merge(indexFile, views);

});
