
Stamplay.init('webinars');

//CONTROLLER
(function() {
  'use strict';
  angular.module('stamplay')
  .controller('signupController', signupController);
  signupController.$inject = ['webinarsFactory', '$state',"$http","$scope", "$stamplay","$stateParams"];

  function signupController(webinarsFactory, $state, $http, $scope, $stamplay, $stateParams){


//GET WEBINAR DATA
    if($stateParams.id) {
      var objectInstance = new Stamplay.Cobject('webinar1').Model;
      objectInstance.fetch($stateParams.id).then(function() {
        var webinarTitle = objectInstance.instance.title;
        console.log(webinarTitle);
        // var webinarSubTitle = objectInstance.instance.subtitle;
        // var webinarDay = objectInstance.instance.day;
        // var webinarTime = objectInstance.instance.time;
        // var webinarAMPM = objectInstance.instance.ampm;
        document.getElementById('webinar1Title').value = webinarTitle;
        // document.getElementById('webinarSubTitle').value = webinarSubTitle;
        // document.getElementById('webinarDescription').value = webinarDescription;
        // document.getElementById('webinarDay').value = webinarDay;
        // document.getElementById('webinarTime').value = webinarTime;
        // document.getElementById('webinarAMPM').value = webinarAMPM;
      });
    }

//REGISTER TO WEBINAR
  $scope.register = function(){
    if($stateParams.id) {
      var objectInstance = new Stamplay.Cobject('webinar1').Model;
      objectInstance.fetch($stateParams.id).then(function() {
        var webinarTitle = objectInstance.instance.title;

    var registerInfo = {
      firstName: $scope.first,
      lastName: $scope.last,
      email: $scope.em,
      organization: $scope.org,
      webinar: webinarTitle
    };

    webinarsFactory.signup(registerInfo).then(function(){
      document.getElementById('registerForm').className = "webinarSelection z-depth-1 center animated zoomOut";
      setTimeout(showMessage, 1000);

      function showMessage(){
        document.getElementById('message').className = "animated zoomIn center";
        setTimeout(reset, 3000);

        function reset(){
          $state.go('Webinars');
        }
      }
    });

  });
  }
};

}
})();