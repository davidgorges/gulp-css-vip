# gulp-css-vip
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]  [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][depstat-image]][depstat-url]

> css-vip plugin for [gulp](https://github.com/wearefractal/gulp)

## What it does

Sometimes, you need to override all css rules with ``!important`` (e.g. when writing embeddable widgets). 
gulp-css-vip automatically adds to all your css rules automatically, so you don't have to. 

## Usage

First, install `gulp-css-vip` as a development dependency:

```shell
npm install --save-dev gulp-css-vip
```

Then, add it to your `gulpfile.js`:

```javascript
var cssVip = require("gulp-css-vip");

gulp.src("./src/*.ext")
	.pipe(cssVip())
	.pipe(gulp.dest("./dist"));
```
## Thanks

* [joshuahatcher/grunt-important-css](https://github.com/joshuahatcher/grunt-important-css) Original Grunt plugin

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/gulp-css-vip
[npm-image]: https://badge.fury.io/js/gulp-css-vip.png

[travis-url]: http://travis-ci.org/davidgorges/gulp-css-vip
[travis-image]: https://secure.travis-ci.org/davidgorges/gulp-css-vip.png?branch=master

[coveralls-url]: https://coveralls.io/r/davidgorges/gulp-css-vip
[coveralls-image]: https://coveralls.io/repos/davidgorges/gulp-css-vip/badge.png

[depstat-url]: https://david-dm.org/davidgorges/gulp-css-vip
[depstat-image]: https://david-dm.org/davidgorges/gulp-css-vip.png
