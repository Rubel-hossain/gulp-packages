const gulp = require('gulp');
const { src,dest, watch } = require("gulp");
const minifyJs = require("gulp-uglify");
const minifyCss = require("gulp-clean-css");
const sourceMaps = require("gulp-sourcemaps");
const concat = require("gulp-concat");

const jsFiles = ["./static/js/jsfile1.js","./static/js/jsfile2.js"];
const cssFiles = ["./static/css/cssfile1.css","./static/css/cssfile2.css"];
const bundlejs = ()=>{
    return (
        src(jsFiles)
        .pipe(sourceMaps.init())
        .pipe(minifyJs())
        .pipe(concat("bundle.js"))
        .pipe(sourceMaps.write())
        .pipe(dest("./dist/static/js/"))
    )
}

const bundleCss = ()=>{
    return (
      src(cssFiles)
      .pipe(sourceMaps.init())
      .pipe(minifyCss())
      .pipe(concat("bundle.css"))  
      .pipe(sourceMaps.write())
      .pipe(dest("./dist/static/css/"))
    )
}

const devWatch = ()=>{
    watch("./static/js/**/*.js",gulp.series(["bundlejs","bundleCss"]));
}
exports.bundlejs = bundlejs;
exports.bundleCss = bundleCss;
exports.devWatch = devWatch;