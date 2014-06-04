'use strict';

angular.module('angularHttpInterceptorApp')
  .controller('MainCtrl', ['$scope', '$http', '$log', function ($scope, $http, $log) {
    $scope.url = 'https://api.github.com/users/octocat/orgs';
    $scope.send = function() {
      $log.info('Send a HTTP request to ' + $scope.url);
      $http.get($scope.url)
        .then(function(resp) {
        }, function(error) {
          $log.error(error);
        });
    };
  }]);
