
Stamplay.init('webinars');

//CONTROLLER
(function() {
  'use strict';
  angular.module('stamplay')
  .controller('adminController', adminController);
  adminController.$inject = ['webinarsFactory', '$state',"$http","$scope", "$stamplay"];

  function adminController(webinarsFactory, $state, $http, $scope, $stamplay){

//GET WEBINAR DATA
  $scope.allWebinars = $scope.allWebinars ? $scope.allWebinars : [];

    webinarsFactory.getWebinars().then(function(webinars){
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