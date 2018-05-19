(function () {

  angular.module('myApp', ['ui.router','ui.bootstrap']);

})();

(function () {
  angular.module('myApp').config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider.state( 'home', {
      url: '/home',
      controller: 'homeController',
      controllerAs: '$ctrl',
      templateUrl: 'home/home.html'
    });
  });
})();
