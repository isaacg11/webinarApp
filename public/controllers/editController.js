
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
        document.getElementById('webinarTime').value = webinarTime +" "+webinarAMPM;
      });
    }
      

}
})();