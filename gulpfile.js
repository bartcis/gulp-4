const { watch, src, dest, series, parallel } = require('gulp');
const browserSync = require('browser-sync').create();

// const gulpif = require('gulp-if');
// const uglify = require('gulp-uglify');

const config = {
    app: {
        js: [
            './src/scripts/**/*.js'
        ],
        scss: './src/styles/**/*.scss',
        fonts: './src/fonts/*',
        images: './src/images/*.*',
        html: './src/*.html'
    },
    dist: {
        base: './dist/',
        fonts: './dist/fonts',
        images: './dist/images'
    }
}

function jsTask() { }

function cssTask() { }

function fontTask() { }

function imagesTask() { }

function templateTask() { }

function watchFiles() {
    watch(config.app.js, series(jsTask, reload));
    watch(config.app.scss, series(cssTask, reload));
    watch(config.app.fonts, series(fontTask, reload));
    watch(config.app.images, series(imagesTask, reload));
    watch(config.app.html, series(templateTask, reload));
}

function liveReload() {
    browserSync.init({
        server: {
            baseDir: config.dist.base
        },
    });
}

function reload (done) {
    browserSync.reload();
    done();
}

function defaultTask(cb) {
    // place code for your default task here
    cb();
}

exports.dev = parallel(liveReload, watchFiles);
