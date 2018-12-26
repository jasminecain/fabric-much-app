const gulp = require('gulp'),
  del = require('del'),
  sass = require('gulp-sass'),
  jshint = require('gulp-jshint'),
  sourcemaps = require('gulp-sourcemaps'),
  browserify = require('browserify'),
  source = require('vinyl-source-stream'),
  buffer = require('vinyl-buffer'),
  gutil = require('gulp-util'),
  ngAnnotate = require('browserify-ngannotate'),
  // replace = require('gulp-replace'),
  $ = require('gulp-load-plugins')()

const deploy = require('gulp-gh-pages');

// cleans the build output
gulp.task('clean', function (cb) {
  del('./dist', {force: true});
});

// runs sass, creates css source maps
gulp.task('build-css', function() {
  return gulp.src('app/styles/sass/*')
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest('./dist/styles/'));
});

// runs jshint
gulp.task('jshint', function() {
  gulp.src('./app/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Build a minified Javascript bundle
// Order of js files is determined by browserify
gulp.task('build-js', function() {
  var b = browserify({
    entries: './app/app.js',
    debug: true,
    paths: [
      './app/scripts/components/**/*.js',
      './app/factories/*.js'
    ],
    transform: [ngAnnotate]
  });

  return b.bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    // .pipe(uglify())
    .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/scripts'));
});

// Bundle node modules
gulp.task('bundle-modules', function() {
  return gulp.src([
    './node_modules/angular/angular.min.js',
    './node_modules/ng-file-upload/dist/ng-file-upload.min.js'
  ])
    .pipe(gulp.dest('./dist/node_modules/'));
});

gulp.task('replace', function () {
  var ghPages = '$1https://jasmineq.github.io/fabric-much-app';

  return gulp.src('./dist/**/*.html')
    .pipe($.replace(/("|'?)\/?app\/styles\//g, ghPages + '/styles/'))
    .pipe($.replace(/("|'?)\/?app\/scripts\//g, ghPages + '/scripts/'))
    .pipe($.replace(/("|'?)\/?app\/factories\//g, ghPages + '/factories/'))
    .pipe($.replace(/("|'?)\/?app\/app.js/g, ghPages + '/bundle.js/'))
    .pipe($.replace(/("|'?)\/?node_modules\/angular\//g, ghPages + '/angular/'))
    .pipe($.replace(/("|'?)\/?node_modules\/angular-ui-router\//g, ghPages + '/angular-ui-router/'))
    .pipe($.replace(/("|'?)\/?node_modules\/ng-file-upload\//g, ghPages + '/ng-file-upload/'))
    .pipe(gulp.dest('./dist'));
});

// full build (except sprites), applies cache busting to the main page css and js bundles
gulp.task('build', ['build-css', 'build-js', 'bundle-modules'], function() {
  return gulp.src('./index.html')
    .pipe(gulp.dest('./dist'));
});

// watches file system and triggers a build when a modification is detected
gulp.task('watch', function() {
  return gulp.watch(['./index.html','./partials/*.html', './styles/*.*css', './js/**/*.js'], ['build']);
});

gulp.task('gulp-gh-pages', function () {
  return gulp.src('dist/**/*')
    .pipe($.ghPages())
});

gulp.task('deploy', ['replace'], function () {
  // return gulp.src('dist/**/*')
  //   .pipe(deploy({
  //     remoteUrl: 'https://github.com/jasmineq/fabric-much-app',
  //     branch: 'master'
  //   }))
});

// launch a build upon modification and publish it to a running server
gulp.task('dev', ['watch', 'webserver']);

// installs and builds everything, including sprites
gulp.task('default', ['build']);
