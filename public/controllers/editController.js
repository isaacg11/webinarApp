
Stamplay.init('webinars');

//CONTROLLER
(function() {
  'use strict';
  angular.module('stamplay')
  .controller('editController', editController);
  editController.$inject = ['webinarsFactory', '$state',"$http","$scope", "$stamplay","$stateParams"];

  function editController(webinarsFactory, $state, $http, $scope, $stamplay, $stateParams){

//GET STATEPARAMS ID
    if($stateParams.id) {
      var objectInstance = new Stamplay.Cobject('webinar1').Model;
      objectInstance.fetch($stateParams.id).then(function() {
        var webinarTitle = objectInstance.instance.title;
        var webinarSubTitle = objectInstance.instance.subtitle;
        var webinarDescription = objectInstance.instance.description;
        var webinarDay = objectInstance.instance.day;
        var webinarTime = objectInstance.instance.time;
        var webinarAMPM = objectInstance.instance.ampm;
        document.getElementById('webinarTitle').value = webinarTitle;
        document.getElementById('webinarSubTitle').value = webinarSubTitle;
        document.getElementById('webinarDescription').value = webinarDescription;
        document.getElementById('webinarDay').value = webinarDay;
        document.getElementById('webinarTime').value = webinarTime;
        document.getElementById('webinarAMPM').value = webinarAMPM;
      });
    }

//EDIT WEBINAR
    $scope.updateWebinar = function(){
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

      webinarsFactory.editWebinar($stateParams.id, webinarDetails).then(function(){
        $state.go('Admin');
      });
  };
      

}
})();