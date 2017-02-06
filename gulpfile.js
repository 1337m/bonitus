let gulp = require('gulp');
let sass = require('gulp-sass');
let scsslint = require('gulp-sass-lint');
let ts = require('gulp-typescript');
let tslint = require('gulp-tslint');

gulp.task('default', [
    'sass:lint',
    'ts:lint',
    'sass',
    'ts',
    'sass:watch',
    'ts:watch'
]);

gulp.task('sass', () => {
    return gulp
        .src('./src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('scss:lint', () => {
    return gulp
        .src('./src/**/*.scss')
        .pipe(scsslint());
});

gulp.task('sass:watch', () => {
    return gulp
        .watch('./src/**/*.scss', ['sass:lint', 'sass']);
});

gulp.task('ts', () => {
    return gulp.src([
        './src/**/*.ts',
        '!./src/helper/**/*.ts'
    ])
        .pipe(ts({
            module: 'system',
            noImplicitAny: true,
            out: 'app.js',
            target: 'es5'
        }))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('ts:lint', () => {
    return gulp.src('./src/**/*.ts')
        .pipe(tslint({
            formatter: 'verbose'
        }))
        .pipe(tslint.report())
});

gulp.task('ts:watch', () => {
    return gulp
        .watch('./src/**/*.ts', ['ts:lint', 'ts']);
});
