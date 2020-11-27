var gulp = require('gulp');
var run = require('gulp-run');

gulp.task('runwebpack', function () {

  // watch for javascript file (*.js) changes, in current directory (./)
  // run this watch task with gulp runwebpack
  gulp.watch(['./**/*.js','./*.js', './sass/*.scss'], function () {

    // run an npm command called `build`, when above js file changes
    return run('npm run build').exec();

    // uncomment below, and comment above, if you have problems
    // return run('echo Hello World').exec();
  });
});  