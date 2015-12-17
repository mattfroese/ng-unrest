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
    // let's assume that the UnicornLauncher constructor was also changed to
    // accept and use the useTinfoilShielding argument
    return new Unrest(uri, config);
  }];
  // var uri = '/api/';
  // var config = {
  //   cacheTTL: 10 * 60 * 1000, // 10 minutes
  //   cacheByDefault: false,
  //   storage: localStorage
  // };
  // var self = new Unrest(uri,config);
  // Unrest.config = function(uri,config){
  //   self = new Unrest(uri,config);
  // }
  // return self;
});
