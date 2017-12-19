let gulp = require('gulp');
let less = require('gulp-less');
let path = require('path');
let watch = require('gulp-watch');
gulp.task('less', function () {
    return watch('./less/**/*.less', function () {
        gulp.src('./less/**/global.less')
            .pipe(less({
                paths: [path.join(__dirname, 'less', 'includes')]
            }))
            .pipe(gulp.dest('./css'));
    });
});