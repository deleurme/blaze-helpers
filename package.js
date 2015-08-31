Package.describe({
  name: 'sdeleurme:blaze-helpers',
  version: '0.1.1',
  summary: 'Just another simple set of helpers for blaze.',
  git: 'git@github.com:deleurme/blaze-helpers.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use(["templating", "underscore"]);

  api.versionsFrom('1.1.0.3');
  api.addFiles('blaze-helpers.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('sdeleurme:blaze-helpers');
  api.addFiles('blaze-helpers-tests.js', 'client');
});
