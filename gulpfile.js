const { src, dest, parallel, series, watch } = require('gulp');
const pug = require('gulp-pug');
const stylus = require('gulp-stylus');

function pugDone() {
    return src(['src/index.pug','src/catalog.pug', 'src/product.pug', 'src/cart.pug'])
        .pipe(pug())
        .pipe(dest('distr/'))
}

function stylusDone() {
    return src(['src/style.styl'])
        .pipe(stylus())
        .pipe(dest('distr/'))
}

function buildCopy() {
    return src(['src/images/**/*'], {base:'src'})
        .pipe(dest('distr'))
}




exports.build = series(pugDone, stylusDone, buildCopy)
exports.styles = stylusDone;
exports.pugFunc = pugDone;