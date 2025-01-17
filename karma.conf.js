module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['browserify','es6-shim','mocha', 'chai', 'chai-sinon', 'chai-as-promised'],


    // list of files / patterns to load in the browser
    files: [
      // JavaScript Application Libaries
      'src/**/*.js',
      'test/**/*.spec.js',
    ],


    // list of files to exclude
    exclude: [
    ],
    preprocessors: {
      'src/**/*.js': 'browserify',
      'test/**/*.js': 'browserify'
    },
    browserify : {
      debug: true,
      transform: [
        ['babelify', { optional: ['es7.asyncFunctions'] }],
        ['browserify-istanbul', {instrumenter: require('isparta')}]
      ]
    },
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'], //coverage removed

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // // level of logging
    // // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    // logLevel: config.LOG_ERROR,


    // enable / disable watching file and executing tests whenever any file changes
    // autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true

  });
};
