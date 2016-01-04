
Stamplay.init('webinars');

//CONTROLLER
(function() {
  'use strict';
  angular.module('stamplay')
  .controller('webinarsController', webinarsController);
  webinarsController.$inject = ['webinarsFactory', '$state',"$http","$scope", "$stamplay"];

  function webinarsController(webinarsFactory, $state, $http, $scope, $stamplay){


//GET WEBINAR DATA
  $scope.allWebinars = $scope.allWebinars ? $scope.allWebinars : [];

  webinarsFactory.getWebinars().then(function(webinars){
    $scope.allWebinars = webinars;
  });


//LOGIN TO ADMIN
	$scope.login = function(){
		var answer = prompt("ENTER ACCESS CODE");
    var objectInstance = new Stamplay.Cobject('code').Model;
    objectInstance.fetch('568af131247342ea6c2cbfa1').then(function() {
      var accessCode = objectInstance.instance.accessCode;
          if(answer === accessCode){
          	$state.go('Admin');
          }
          else{
          	var $toastContent = $('<span id="toastObj">Incorrect Passcode</span>');
  			    Materialize.toast($toastContent, 5000);
  			  }
      });
	};

}
})();