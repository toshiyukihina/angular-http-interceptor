'use strict';

angular.module('angularHttpInterceptorApp')
  .factory('myHttpInterceptor', ['$q', '$timeout', '$location', '$log', function ($q, $timeout, $location, $log) {
    var asyncDelay = function(config, delay) {
      var deferred = $q.defer();
      $timeout(function() {
        deferred.resolve(config);
      }, delay);
      return deferred.promise;
    };
    
    return {
      'request': function(config) {
        $log.info('Interceptor handled HTTP request.');
        return asyncDelay(config, 3000);
      },
      'requestError': function(rejection) {
        $log.warn('Interceptor handled HTTP request error.');
        return $q.reject(rejection);
      },
      'response': function(response) {
        $log.info('Interceptor handled HTTP response: ' + response.status);
        // Always redirects.
        $location.path('/redirected');
        return response;
      },
      'responseError': function(rejection) {
        $log.warn('Interceptor handled HTTP response error.');
        return $q.reject(rejection);
      }
    };
  }]);
