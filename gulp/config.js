var path = require('path');
var dest = './dist',
  src = './src',
  karmaPath = path.join(__dirname, '../karma.conf.js');

module.exports = {
  browserSync: {
    server: {
      baseDir: [dest]
    },
    files: [
      dest + '/**'
    ],
    open: true
  },
  karma: karmaPath,
  markup: {
    src: src + "/**/*.html",
    dest: dest
  },
  js: src + "/**/*.js",
  src: src,
  dest: dest
};
