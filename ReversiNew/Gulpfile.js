const gulp = require('gulp');
const { src, dest } = require('gulp');
const { series, parallel } = require('gulp');
const clean_css = require('gulp-clean-css');
const auto_prefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const order = require('gulp-order');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const minify = require('gulp-minify');
//  Also install:
//  'npm install --save-dev gulp-babel @babel/core @babel/preset-env'

const html = function () {
    return src(['./wwwroot/*/html'])
        .pipe(concat("index.html"))
        .pipe(gulp.dest("wwwrot/dist"))
};
gulp.task("build-html", html);

const css = function () {
    return src(["./wwwroot/css/*.css", "./wwwroot/sass/*.scss"])
        .pipe(concat("style.css"))
        .pipe(clean_css({ compatibility: 'ie8' }))
        .pipe(auto_prefixer({
            cascade: false
        }))
        .pipe(gulp.dest("wwwroot/dist"))
        .pipe(browserSync.stream());
};
gulp.task("build-css", css);

const js = function () {
    return src(["./wwwroot/js/*.js"])
        .pipe(order([
            "wwwroot/js/site.js",
            "wwwroot/js/Widget.js",
            "wwwroot/js/SPA.js"
        ]))
        .pipe(concat("app.js"))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .on('error', console.error.bind(console))
        .pipe(uglify())
        .pipe(minify())
        .pipe(gulp.dest("wwwroot/dist"))
};
gulp.task("build-js", js);

//exports.build = parallel(html, js, css);
exports.build = series(html, css, js);

gulp.task('serve', function () {
    browserSync.init({ server: "./wwwroot/dist" });
    gulp.watch(".wwwroot/*.html", series(html));
    gulp.watch("./wwwroot/js/*.js", series(js));
    gulp.watch("./wwwroot/css/*.css", series(css));

    gulp.watch("./wwwroot/css/*.css").on('change', browserSync.reload);
    gulp.watch("./wwwroot/*.html").on('change', browserSync.reload);
    gulp.watch("./wwwroot/js/*.js").on('change', browserSync.reload);
});