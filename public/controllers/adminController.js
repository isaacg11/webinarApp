
Stamplay.init('webinars');

//CONTROLLER
(function() {
  'use strict';
  angular.module('stamplay')
  .controller('adminController', adminController);
  adminController.$inject = ['webinarsFactory', '$state',"$http","$scope", "$stamplay"];

  function adminController(webinarsFactory, $state, $http, $scope, $stamplay){


}
})();