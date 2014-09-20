'use strict'

angular.module('portalApp', [
    'ui.bootstrap',
    'portalApp.home'
])

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'home/home.tpl.html',
        controller: 'HomeCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }])
  

;
