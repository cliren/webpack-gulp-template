var dest = './dist',
  src = './src';

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
  markup: {
    src: src + "/**/*.html",
    dest: dest
  },
  js: src + "/**/*.js"
};
