
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


