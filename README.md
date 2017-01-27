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
  gulp.src('src/index.html')
    .pipe(replace({
      quote: 'single'
    }))
    .pipe(gulp.dest('build'));
});
```

### Option
The only available option is : `'quote'` and it accept a `String` that could be: `'single'` or `'double'`. `'single'` is the default option.

## Release History

 * 27-01-2017   v1.0.0   Initial version.
