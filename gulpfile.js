var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var source = require('gulp-sourcemaps');
var mario = require('gulp-plumber');
var mainBowerFiles = require('main-bower-files');

var INPUT = 'src/';
var OUTPUT = 'dist/';

function mushroom (e) {
  if (e.fileName) {
    console.log(e.fileName);
  }
  console.log(e.message);
  require('beepbeep')(2);
  this.emit('end');
}

gulp.task('scripts', function () {
  var files = mainBowerFiles('**/*.js').concat([
    INPUT + '/ng-unrest.js',
  ]);
  return gulp.src(files)
  .pipe(source.init({loadMaps: true}))
  .pipe(mario(mushroom))
  .pipe(require('gulp-jsvalidate')())
  .pipe(concat('ng-unrest.js'))
  .pipe(require('gulp-uglify')({
      mangle: false
  }))
  .pipe(source.write('maps'))
  .pipe(gulp.dest(OUTPUT));
});

gulp.task('watch', function () {
  gulp.watch([ INPUT + '*.js'], ['scripts']);
});

gulp.task('stream', ['scripts','watch']); // alias
gulp.task('default', ['stream']);
