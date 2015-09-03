(function customersControllerIIFE(){

  // create constructor function, pass in 2 dependencies
  var PeopleController = function(peopleFactory, appSettings){
    var vm = this; // variable for view model
    vm.appSettings = appSettings;
    vm.sortBy = "name";
    vm.reverse = false;

    // all the people
    vm.people= [];
    // reflect contents of person form
    vm.currentPerson = {};
    // vm.master = {};

    //create customer in backend using API
    vm.create = function(){
      //get value from form and pass it to factory
      peopleFactory.create(vm.currentPerson)
      .then(function(results){
        //get result of create (the created person)
        // vm.master = results.data;
        // append the person to people array
        // automatically update list of people in view
        vm.people.push(results.data);
        // clear out current person, and thus clear form
        vm.currentPerson = {};
      })

    }

    function init(){
      // Init the people from the factory
      // Get all the people from the backend
      peopleFactory.getPeople()
      .then(function(result){
        vm.people = result.data;
      }, function(data, status, headers, config){
        console.log("Error getting people from the remote api");
        alert("Error getting people from the remote api");
      });
    }

    vm.doSort = function(propName){
      vm.sortBy = propName;
      vm.reverse = !vm.reverse;
    };

    init();

  };

 PeopleController.$inject = ['peopleFactory', 'appSettings'];

 // The Controller is part of the module.
 angular.module('wdiAddressBook').controller('peopleController', PeopleController);

})();
