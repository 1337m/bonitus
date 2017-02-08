let babel = require('gulp-babel');
let eslint = require('gulp-eslint');
let gulp = require('gulp');
let sass = require('gulp-sass');
let scsslint = require('gulp-sass-lint');

gulp.task('default', [
    'sass:lint',
    // 'es6:lint',
    'sass',
    'es6',
    // 'sass:watch',
    // 'es6:watch'
]);

gulp.task('es6', () => {
    return gulp
        .src('./src/app.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('es6:lint', () => {
    return gulp
        .src(['./src/**/*.js', '!node_modules/**'])
        .pipe(eslint({
            rules: {
                'strict': 2
            }
        }))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('es6:watch', () => {
    return gulp
        .watch('./src/**/*.js', ['es6:lint', 'es6']);
});

gulp.task('sass', () => {
    return gulp
        .src('./src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass:lint', () => {
    return gulp
        .src('./src/**/*.scss')
        .pipe(scsslint());
});

gulp.task('sass:watch', () => {
    return gulp
        .watch('./src/**/*.scss', ['sass:lint', 'sass']);
});
