var gulp = require('gulp');
var gRename = require('gulp-rename');
var gReplace = require('gulp-replace');
var minimist = require('minimist');

var args = minimist(process.argv.slice(2));

gulp.task('create:component', function(){
  gulp
    .src('./src/templates/component_template.jsx')
    .pipe(gRename(args.name + '.jsx'))
    .pipe(gReplace(/ComponentTemplate/g, args.name))
    .pipe(gulp.dest('./src/components'))
  console.log(args)
});
