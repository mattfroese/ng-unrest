angular
.module('ngUnrest', [])
.provider('unrest', function unrestProvider() {
  var uri = '/api/';
  var config = {
    cacheTTL: 10 * 60 * 1000, // 10 minutes
    cacheByDefault: false,
    storage: localStorage
  };
  this.configure = function(path, configuration) {
    uri = path;
    config = configuration;
  };
  this.$get = [function unrestFactory() {
    return new Unrest(uri, config);
  }];
});
