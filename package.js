Package.describe({
  name: 'sdeleurme:blaze-helpers',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Simple set of helpers for blaze.',
  // URL to the Git repository containing the source code for this package.
  git: 'git@github.com:sdel/blaze-helpers.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles('blaze-helpers.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('sdeleurme:blaze-helpers');
  api.addFiles('blaze-helpers-tests.js');
});
