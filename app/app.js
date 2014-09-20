var portalApp = angular.module('portalApp', [
    'ngRoute',
    'portalApp.home'
]);

portalApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'templates/home/home.tpl.html',
        controller: 'HomeCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
}])

;

