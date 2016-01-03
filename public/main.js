Stamplay.init('webinars');


window.onload = function(){

//GET WEBINAR DATA
  var objectInstance = new Stamplay.Cobject('webinar1').Model;
  objectInstance.fetch('568899a93b7a92633575ca99').then(function() {
    var webinarTitle = objectInstance.instance.title;
    var webinarDescription = objectInstance.instance.description;

    document.getElementById('webinar1Title').innerHTML = webinarTitle;
    document.getElementById('webinar1Description').innerHTML = webinarDescription;
  });
};


//LOGIN TO ADMIN

	function login(){
		var em = document.getElementById('email').value;
		var pass = document.getElementById('password').value;

          if(em === "accounts@stamplay.com" && pass === "st4mpl4y4pps"){
          	window.location = "admin.html";
          }

          else{
          	var $toastContent = $('<span id="toastObj">Incorrect Email/Password</span>');
  			Materialize.toast($toastContent, 5000);
  			}
	}


