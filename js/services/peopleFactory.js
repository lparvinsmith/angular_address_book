(function peopleFactoryIIFE(){

  // Create a people factory
  var peopleFactory = function($http){
    var peopleAPI = {};

    peopleAPI.getPeople = function(){
      // allow access to the list of people
      return  $http.get('http://localhost:3000/people');
    };

    peopleAPI.getPerson = function(personId){
      return  $http.get('http://localhost:3000/people/' + personId);
    };

    peopleAPI.create = function(person){
      return $http.post('http://localhost:3000/people/', person);
    };
    return peopleAPI;
  };



  peopleFactory.$inject = ['$http'];

  angular.module('wdiAddressBook').factory('peopleFactory', peopleFactory);
})();
