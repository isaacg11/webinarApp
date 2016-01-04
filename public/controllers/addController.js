
Stamplay.init('webinars');

//CONTROLLER
(function() {
  'use strict';
  angular.module('stamplay')
  .controller('addController', addController);
  addController.$inject = ['webinarsFactory', '$state',"$http","$scope", "$stamplay"];

  function addController(webinarsFactory, $state, $http, $scope, $stamplay){

//ADD NEW WEBINAR
    $scope.addWebinar = function(){
      var webinarTitle = document.getElementById('webinarTitle').value;
      var webinarSubTitle = document.getElementById('webinarSubTitle').value;
      var webinarDescription = document.getElementById('webinarDescription').value ;

      var selectDay = document.getElementById("webinarDay");
      var webinarDay = selectDay.options[selectDay.selectedIndex].value;

      var selectTime = document.getElementById("webinarTime");
      var webinarTime = selectTime.options[selectTime.selectedIndex].value;

      var selectAMPM = document.getElementById("webinarAMPM");
      var webinarAMPM = selectAMPM.options[selectAMPM.selectedIndex].value;

      var webinarDetails = {
        title: webinarTitle,
        subtitle: webinarSubTitle,
        description: webinarDescription,
        day: webinarDay,
        time: webinarTime,
        ampm: webinarAMPM
      };

      webinarsFactory.addWebinar(webinarDetails).then(function(){
        $state.go('Admin');
      });
    };

}
})();