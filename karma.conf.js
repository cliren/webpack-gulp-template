module.exports = function(config) {
  config.set(
    {
      basePath: './',
      frameworks: ['jasmine'],
      browsers: ['PhantomJS'],
      reporters: ['spec', 'coverage'],
      colors: true,
      files: [
        './node_modules/phantomjs-polyfill/bind-polyfill.js',
        './src/**/__tests__/**/*spec.js'
      ],
      preprocessors: {
        './src/vendor/vendor.js': ['webpack'],
        './src/**/__tests__/**/*spec.js': ['webpack']
      },
      coverageReporter: {
        dir: 'coverage',
        reporters: [
          {
            type: 'html'
          },
          {
            // Output a coverage summary to console
            type: 'text-summary'
          }
        ]
      },
      webpack: require("./karma.webpack.config.js"),

      plugins: [
        'karma-coverage',
        'istanbul-instrumenter-loader',
        'karma-webpack',
        'karma-jasmine-ajax',
        'karma-jasmine',
        'karma-phantomjs-launcher',
        'karma-spec-reporter'
      ],

      port: 9876,
      reportSlowerThan: 500,
      captureTimeout: 20000,
      logLevel: config.LOG_INFO,
      singleRun: true
    });
};
