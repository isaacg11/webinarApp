
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
        $scope.title  = objectInstance.instance.title;
        $scope.subtitle = objectInstance.instance.subtitle;
        var webinarDay = objectInstance.instance.day;
        $scope.day = webinarDay;
//GLOBAL DAY VARIABLES
    var d = new Date();
    var weekday = new Array(7);
    weekday[0]=  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var today = weekday[d.getDay()];


//DISPLAY WEBINAR DATE IF MON
        if(today === "Sunday" && webinarDay === "Monday"){
        var nextDateFromSunIfMon = d.setDate(d.getDate() + 1);
        var scheduledDateFromSunIfMon = new Date(nextDateFromSunIfMon);
        $scope.date = scheduledDateFromSunIfMon.toLocaleDateString() + " " + "@";
        }

        if(today === "Monday" && webinarDay === "Monday"){
        var nextDateFromMonIfMon = d.setDate(d.getDate() + 7);
        var scheduledDateFromMonIfMon = new Date(nextDateFromMonIfMon);
        $scope.date = scheduledDateFromMonIfMon.toLocaleDateString() + " " + "@";
        }

        if(today === "Tuesday" && webinarDay === "Monday"){
        var nextDateFromTuesIfMon = d.setDate(d.getDate() + 6);
        var scheduledDateFromTuesIfMon = new Date(nextDateFromTuesIfMon);
        $scope.date = scheduledDateFromTuesIfMon.toLocaleDateString() + " " + "@";
        }

        if(today === "Wednesday" && webinarDay === "Monday"){
        var nextDateFromWedIfMon = d.setDate(d.getDate() + 5);
        var scheduledDateFromWedIfMon = new Date(nextDateFromWedIfMon);
        $scope.date = scheduledDateFromWedIfMon.toLocaleDateString() + " " + "@";
        }

        if(today === "Thursday" && webinarDay === "Monday"){
        var nextDateFromThurIfMon = d.setDate(d.getDate() + 4);
        var scheduledDateFromThurIfMon = new Date(nextDateFromThurIfMon);
        $scope.date = scheduledDateFromThurIfMon.toLocaleDateString() + " " + "@";
        }

        if(today === "Friday" && webinarDay === "Monday"){
        var nextDateFromFriIfMon = d.setDate(d.getDate() + 3);
        var scheduledDateFromFriIfMon = new Date(nextDateFromFriIfMon);
        $scope.date = scheduledDateFromFriIfMon.toLocaleDateString() + " " + "@";
        }

        if(today === "Saturday" && webinarDay === "Monday"){
        var nextDateFromSatIfMon = d.setDate(d.getDate() + 2);
        var scheduledDateFromSatIfMon = new Date(nextDateFromSatIfMon);
        $scope.date = scheduledDateFromSatIfMon.toLocaleDateString() + " " + "@";
        }

//DISPLAY WEBINAR DATE IF TUES
        if(today === "Sunday" && webinarDay === "Tuesday"){
        var nextDateFromSunIfTues = d.setDate(d.getDate() + 2);
        var scheduledDateFromSunIfTues = new Date(nextDateFromSunIfTues);
        $scope.date = scheduledDateFromSunIfTues.toLocaleDateString() + " " + "@";
        }

        if(today === "Monday" && webinarDay === "Tuesday"){
        var nextDateFromMonIfTues = d.setDate(d.getDate() + 1);
        var scheduledDateFromMonIfTues = new Date(nextDateFromMonIfTues);
        $scope.date = scheduledDateFromMonIfTues.toLocaleDateString() + " " + "@";
        }

        if(today === "Tuesday" && webinarDay === "Tuesday"){
        var nextDateFromTuesIfTues = d.setDate(d.getDate() + 7);
        var scheduledDateFromTuesIfTues = new Date(nextDateFromTuesIfTues);
        $scope.date = scheduledDateFromTuesIfTues.toLocaleDateString() + " " + "@";
        }

        if(today === "Wednesday" && webinarDay === "Tuesday"){
        var nextDateFromWedIfTues = d.setDate(d.getDate() + 6);
        var scheduledDateFromWedIfTues = new Date(nextDateFromWedIfTues);
        $scope.date = scheduledDateFromWedIfTues.toLocaleDateString() + " " + "@";
        }

        if(today === "Thursday" && webinarDay === "Tuesday"){
        var nextDateFromThurIfTues = d.setDate(d.getDate() + 5);
        var scheduledDateFromThurIfTues = new Date(nextDateFromThurIfTues);
        $scope.date = scheduledDateFromThurIfTues.toLocaleDateString() + " " + "@";
        }

        if(today === "Friday" && webinarDay === "Tuesday"){
        var nextDateFromFriIfTues = d.setDate(d.getDate() + 4);
        var scheduledDateFromFriIfTues = new Date(nextDateFromFriIfTues);
        $scope.date = scheduledDateFromFriIfTues.toLocaleDateString() + " " + "@";
        }

        if(today === "Saturday" && webinarDay === "Tuesday"){
        var nextDateFromSatIfTues = d.setDate(d.getDate() + 3);
        var scheduledDateFromSatIfTues = new Date(nextDateFromSatIfTues);
        $scope.date = scheduledDateFromSatIfTues.toLocaleDateString() + " " + "@";
        }

//DISPLAY WEBINAR DATE IF WED
        if(today === "Sunday" && webinarDay === "Wednesday"){
        var nextDateFromSunIfWed = d.setDate(d.getDate() + 3);
        var scheduledDateFromSunIfWed = new Date(nextDateFromSunIfWed);
        $scope.date = scheduledDateFromSunIfWed.toLocaleDateString() + " " + "@";
        }

        if(today === "Monday" && webinarDay === "Wednesday"){
        var nextDateFromMonIfWed = d.setDate(d.getDate() + 2);
        var scheduledDateFromMonIfWed = new Date(nextDateFromMonIfWed);
        $scope.date = scheduledDateFromMonIfWed.toLocaleDateString() + " " + "@";
        }

        if(today === "Tuesday" && webinarDay === "Wednesday"){
        var nextDateFromTuesIfWed = d.setDate(d.getDate() + 1);
        var scheduledDateFromTuesIfWed = new Date(nextDateFromTuesIfWed);
        $scope.date = scheduledDateFromTuesIfWed.toLocaleDateString() + " " + "@";
        }

        if(today === "Wednesday" && webinarDay === "Wednesday"){
        var nextDateFromWedIfWed = d.setDate(d.getDate() + 7);
        var scheduledDateFromWedIfWed = new Date(nextDateFromWedIfWed);
        $scope.date = scheduledDateFromWedIfWed.toLocaleDateString() + " " + "@";
        }

        if(today === "Thursday" && webinarDay === "Wednesday"){
        var nextDateFromThurIfWed = d.setDate(d.getDate() + 6);
        var scheduledDateFromThurIfWed = new Date(nextDateFromThurIfWed);
        $scope.date = scheduledDateFromThurIfWed.toLocaleDateString() + " " + "@";
        }

        if(today === "Friday" && webinarDay === "Wednesday"){
        var nextDateFromFriIfWed = d.setDate(d.getDate() + 5);
        var scheduledDateFromFriIfWed = new Date(nextDateFromFriIfWed);
        $scope.date = scheduledDateFromFriIfWed.toLocaleDateString() + " " + "@";
        }

        if(today === "Saturday" && webinarDay === "Wednesday"){
        var nextDateFromSatIfWed = d.setDate(d.getDate() + 4);
        var scheduledDateFromSatIfWed = new Date(nextDateFromSatIfWed);
        $scope.date = scheduledDateFromSatIfWed.toLocaleDateString() + " " + "@";
        }

//DISPLAY WEBINAR DATE IF THUR
        if(today === "Sunday" && webinarDay === "Thursday"){
        var nextDateFromSunIfThur = d.setDate(d.getDate() + 4);
        var scheduledDateFromSunIfThur = new Date(nextDateFromSunIfThur);
        $scope.date = scheduledDateFromSunIfThur.toLocaleDateString() + " " + "@";
        }

        if(today === "Monday" && webinarDay === "Thursday"){
        var nextDateFromMonIfThur = d.setDate(d.getDate() + 3);
        var scheduledDateFromMonIfThur = new Date(nextDateFromMonIfThur);
        $scope.date = scheduledDateFromMonIfThur.toLocaleDateString() + " " + "@";
        }

        if(today === "Tuesday" && webinarDay === "Thursday"){
        var nextDateFromTuesIfThur = d.setDate(d.getDate() + 2);
        var scheduledDateFromTuesIfThur = new Date(nextDateFromTuesIfThur);
        $scope.date = scheduledDateFromTuesIfThur.toLocaleDateString() + " " + "@";
        }

        if(today === "Wednesday" && webinarDay === "Thursday"){
        var nextDateFromWedIfThur = d.setDate(d.getDate() + 1);
        var scheduledDateFromWedIfThur = new Date(nextDateFromWedIfThur);
        $scope.date = scheduledDateFromWedIfThur.toLocaleDateString() + " " + "@";
        }

        if(today === "Thursday" && webinarDay === "Thursday"){
        var nextDateFromThurIfThur = d.setDate(d.getDate() + 7);
        var scheduledDateFromThurIfThur = new Date(nextDateFromThurIfThur);
        $scope.date = scheduledDateFromThurIfThur.toLocaleDateString() + " " + "@";
        }

        if(today === "Friday" && webinarDay === "Thursday"){
        var nextDateFromFriIfThur = d.setDate(d.getDate() + 6);
        var scheduledDateFromFriIfThur = new Date(nextDateFromFriIfThur);
        $scope.date = scheduledDateFromFriIfThur.toLocaleDateString() + " " + "@";
        }

        if(today === "Saturday" && webinarDay === "Thursday"){
        var nextDateFromSatIfThur = d.setDate(d.getDate() + 5);
        var scheduledDateFromSatIfThur = new Date(nextDateFromSatIfThur);
        $scope.date = scheduledDateFromSatIfThur.toLocaleDateString() + " " + "@";
        }

//DISPLAY WEBINAR DATE IF FRI
        if(today === "Sunday" && webinarDay === "Friday"){
        var nextDateFromSunIfFri = d.setDate(d.getDate() + 5);
        var scheduledDateFromSunIfFri = new Date(nextDateFromSunIfFri);
        $scope.date = scheduledDateFromSunIfFri.toLocaleDateString() + " " + "@";
        
        }

        if(today === "Monday" && webinarDay === "Friday"){
        var nextDateFromMonIfFri = d.setDate(d.getDate() + 4);
        var scheduledDateFromMonIfFri = new Date(nextDateFromMonIfFri);
        $scope.date = scheduledDateFromMonIfFri.toLocaleDateString() + " " + "@";
        }

        if(today === "Tuesday" && webinarDay === "Friday"){
        var nextDateFromTuesIfFri = d.setDate(d.getDate() + 3);
        var scheduledDateFromTuesIfFri = new Date(nextDateFromTuesIfFri);
        $scope.date = scheduledDateFromTuesIfFri.toLocaleDateString() + " " + "@";
        }

        if(today === "Wednesday" && webinarDay === "Friday"){
        var nextDateFromWedIfFri = d.setDate(d.getDate() + 2);
        var scheduledDateFromWedIfFri = new Date(nextDateFromWedIfFri);
        $scope.date = scheduledDateFromWedIfFri.toLocaleDateString() + " " + "@";
        }

        if(today === "Thursday" && webinarDay === "Friday"){
        var nextDateFromThurIfFri = d.setDate(d.getDate() + 1);
        var scheduledDateFromThurIfFri = new Date(nextDateFromThurIfFri);
        $scope.date = scheduledDateFromThurIfFri.toLocaleDateString() + " " + "@";
        }

        if(today === "Friday" && webinarDay === "Friday"){
        var nextDateFromFriIfFri = d.setDate(d.getDate() + 7);
        var scheduledDateFromFriIfFri = new Date(nextDateFromFriIfFri);
        $scope.date = scheduledDateFromFriIfFri.toLocaleDateString() + " " + "@";
        }

        if(today === "Saturday" && webinarDay === "Friday"){
        var nextDateFromSatIfFri = d.setDate(d.getDate() + 6);
        var scheduledDateFromSatIfFri = new Date(nextDateFromSatIfFri);
        $scope.date = scheduledDateFromSatIfFri.toLocaleDateString() + " " + "@";
        }

        $scope.time = objectInstance.instance.time;
        $scope.ampm = objectInstance.instance.ampm;
        $scope.$apply();
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