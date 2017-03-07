const gulp = require('gulp');
const server = require('gulp-server-livereload');
const paths = require('../paths');

gulp.task('serve', () => {
  const serveDir = './'
  const port = '8000'
  console.log('starting server at: ' + serveDir);
  return gulp.src(serveDir)
    .pipe(server({
      livereload: true,
      open: true,
      port: port
    }));
});

gulp.task('serve-export', () => {
  const serveDir = paths.exportSrv;
  const port = '8000'
  console.log('starting server at: ' + serveDir);
  return gulp.src(serveDir)
    .pipe(server({
      livereload: true,
      open: true,
      port: port
    }));
});



