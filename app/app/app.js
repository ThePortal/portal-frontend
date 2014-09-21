var portalApp = angular.module('portalApp', [
    'ngRoute',
    'portalApp.home'
]);

portalApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'app/home/home.tpl.html',
        controller: 'HomeCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
}])

;

