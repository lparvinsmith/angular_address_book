(function peopleFactoryIIFE(){

  // Create a people factory
  var peopleFactory = function($http){
    var peopleAPI = {};

    customersAPI.getPeople = function(){
      // allow access to the list of people
      return  $http.get('http://localhost:3000/people');
    };

    customersAPI.getPerson = function(customerId){
      return  $http.get('http://localhost:3000/people/' + personId);
    };

    customersAPI.create = function(customer){
      return $http.post('http://localhost:3000/people/', {'person': person});
    };
    return peopleAPI;
  };



  peopleFactory.$inject = ['$http'];

  angular.module('wdiAddressBook').factory('peopleFactory', peopleFactory);
})();
