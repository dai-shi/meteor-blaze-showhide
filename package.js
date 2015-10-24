Package.describe({
  name: 'daishi:blaze-showhide',
  version: '0.0.2',
  summary: 'Handy block helpers for show/hide functionality in Blaze',
  git: 'https://github.com/dai-shi/meteor-blaze-showhide',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use('templating');
  api.addFiles(['blaze-showhide.html', 'blaze-showhide.js'], 'client');
});

Package.onTest(function(api) {
  api.use('templating');
  api.use('tinytest');
  api.use('daishi:blaze-showhide', 'client');
  api.addFiles('blaze-showhide-tests.js', 'client');
});
