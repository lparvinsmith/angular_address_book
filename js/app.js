(function wdiAddressBook(){
  var app = angular.module('wdiAddressBook', ['ngRoute', 'ngMessages']);

  app.config(function($routeProvider){
    $routeProvider
      .when('/', {
        controller: 'peopleController',
        controllerAs: 'peepCtrl',
        templateUrl: 'app/views/people.html'
      })
      .when ('/people/:personId', {
        controller: 'personController',
        controllerAs: 'personCtrl',
        templateUrl: 'app/views/person.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

})();
