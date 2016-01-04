
Stamplay.init('webinars');

//CONTROLLER
(function() {
  'use strict';
  angular.module('stamplay')
  .controller('adminController', adminController);
  adminController.$inject = ['webinarsFactory', '$state',"$http","$scope", "$stamplay"];

  function adminController(webinarsFactory, $state, $http, $scope, $stamplay){

//GLOBAL VARIABLES
  var user = new Stamplay.User().Model;
  $scope.allWebinars = $scope.allWebinars ? $scope.allWebinars : [];

    webinarsFactory.getWebinarsForAdmin().then(function(webinars){
      $scope.allWebinars = webinars;
    });

//DELETE WEBINAR
$scope.deleteWebinar = function(id){

  webinarsFactory.eraseWebinar(id).then(function(){
    $state.reload();
  });
};

}
})();