// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
  let browser = ['ChromeHeadless'];

  if (process.env.TRAVIS) {
    browser = ['Chrome_travis_ci'];
  }

  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-spec-reporter'),
      require('karma-mocha-reporter'),
      require('@angular/cli/plugins/karma')
    ],
    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    mime: {
      'text/x-typescript': ['ts', 'tsx']
    },
    coverageIstanbulReporter: {
      reports: {
        html: 'coverage',
        lcovonly: './coverage/coverage.lcov'
      }
    },
    angularCli: {
      config: './angular-cli.json',
      environment: 'dev'
    },
    reporters: config.angularCli && config.angularCli.codeCoverage
      ? ['mocha', 'coverage-istanbul'] : ['spec'],
    specReporter: {
      // maxLogLines: 5,             // limit number of lines logged per test
      suppressErrorSummary: false, // do not print error summary
      suppressFailed: false,      // do not print information about failed tests
      suppressPassed: false,      // do not print information about passed tests
      suppressSkipped: true,      // do not print information about skipped tests
      showSpecTiming: true,      // print the time elapsed for each spec
      failFast: false              // test would finish with error when a first fail occurs.
    },
    // reporter options
    mochaReporter: {
      ignoreSkipped: true
    },
    // reportSlowerThan: 500,       // show tests that take more than 500ms
    browserNoActivityTimeout: 180000,
    browserDisconnectTimeout: 10000,
    browserDisconnectTolerance: 3,
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: browser,
    singleRun: false
  });
};
