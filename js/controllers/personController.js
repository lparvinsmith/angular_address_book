(function personControllerIIFE(){

  var PersonController = function($routeParams, peopleFactory){
    var personId = $routeParams.personId;
    this.person = peopleFactory.person;
    var vm = this; // store 'this' in variable to access in any inner function

    function init(){
      peopleFactory.getPerson(personId).then(function(result){
        vm.person = result.data;
      });
    }
    init();
  }

  PersonController.$inject = ['$routeParams', 'peopleFactory'];

  angular.module('wdiAddressBook').controller('personController', PersonController);

})();
