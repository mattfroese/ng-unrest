# ng-unrest
An angular provider for the [unrest-js](https://github.com/xori/unrest-js/) library

## Installation
```sh
bower install -S ng-unrest
```

## Usage
Configure unrest in your .config loader
```javascript
angular
.module('app', ['ngUnrest'])
.config(['unrestProvider', function(unrestProvider) {
  unrestProvider.configure( '/api', {
    cacheTTL: 10 * 60 * 1000, // 10 minutes
    cacheByDefault: false,
    storage: localStorage
  });
});
```

Load unrest and use within your services/controllers
```javascript
angular
.module('app')
.controller('TestController', function AppsController(unrest) {
  $scope.people = unrest('People').query();
});
```

## Tests

#### Karma
```sh
  karma start --single-run
```
