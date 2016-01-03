
Stamplay.init('webinars');

//CONTROLLER
(function() {
  'use strict';
  angular.module('stamplay')
  .controller('webinarsController', webinarsController);
  webinarsController.$inject = ['webinarsFactory', '$state',"$http","$scope", "$stamplay"];

  function webinarsController(webinarsFactory, $state, $http, $scope, $stamplay){

window.onload = function(){

//GET WEBINAR DATA
  var objectInstance = new Stamplay.Cobject('webinar1').Model;
  objectInstance.fetch('568899a93b7a92633575ca99').then(function() {
    var webinarTitle = objectInstance.instance.title;
    var webinarDescription = objectInstance.instance.description;

    
  });
};


//LOGIN TO ADMIN

	$scope.login = function(){
		var answer = prompt("ENTER ACCESS CODE");

          if(answer === "st4mpl4y4pps"){
          	$state.go('Admin');
          }

          else{
          	var $toastContent = $('<span id="toastObj">Incorrect Passcode</span>');
  			Materialize.toast($toastContent, 5000);
  			}
	};

}
})();