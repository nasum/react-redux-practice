var gulp = require('gulp');
var gulpRename = require('gulp-rename');
var gulpReplace = require('gulp-replace');
var minimist = require('minimist');

var args = minimist(process.argv.slice(2));

gulp.task('create:component', function(){
  gulp
    .src('./src/templates/component_template.jsx')
    .pipe(gulpRename(args.name + '.jsx'))
    .pipe(gulpReplace(/ComponentTemplate/g, args.name))
    .pipe(gulp.dest('./src/components'))
  console.log(args)
});
