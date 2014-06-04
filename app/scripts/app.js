'use strict';

angular
  .module('angularHttpInterceptorApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/redirected', {
        templateUrl: 'views/redirected.html'
      })
      .otherwise({
        redirectTo: '/'
      });
    $httpProvider.interceptors.push('myHttpInterceptor');
  }]);
