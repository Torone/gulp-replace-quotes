## Install

From NPM:

```shell
npm install gulp-replace-quotes --save
```

## Replace Task

Assuming installation via NPM, you can use `gulp-replace-quotes` in your gulpfile like this:

```javascript
var gulp = require('gulp');
var replaceQuotes = require('gulp-replace-quotes');

gulp.task('default', function () {
  gulp.src('src/index.js')
    .pipe(replaceQuotes({
      quote: 'single'
    }))
    .pipe(gulp.dest('build'));
});
```

### Option
The only available option is : `'quote'` and it accept a `String` that could be: `'single'` or `'double'`. `'single'` is the default option.

## Release History

 * 06-02-2018   v1.0.2   Fixed a typo in the README file.
 * 27-01-2017   v1.0.1   Fixed a small bug when replacing a single character.
 * 27-01-2017   v1.0.0   Initial version.
