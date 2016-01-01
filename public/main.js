
Stamplay.init('webinars');

//UPDATE WEBINAR DATE ON WINDOW LOAD
window.onload = function(){
//GLOBAL VARIABLES
	var Today = new Date();
	var weekday = new Array(7);
	weekday[0]=  "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";

	var d = new Date();
	var month = new Array(10);
	month[0] = "January";
	month[1] = "February";
	month[2] = "March";
	month[3] = "April";
	month[4] = "May";
	month[5] = "June";
	month[6] = "July";
	month[7] = "August";
	month[8] = "September";
	month[9] = "October";
	month[10] = "November";
	month[11] = "December";
	var n = month[d.getMonth()];

//WEBINAR DATES FOR STAMPLAY 101
	var Dec30 = new Date(2015, 11, 30, 0, 0, 0, 0);
	var Jan6 = new Date(2016, 0, 6, 0, 0, 0, 0);
	var Jan13 = new Date(2016, 0, 13, 0, 0, 0, 0);
	var Jan20 = new Date(2016, 0, 20, 0, 0, 0, 0);
	var Jan27 = new Date(2016, 0, 27, 0, 0, 0, 0);
	var Feb3 = new Date(2016, 1, 3, 0, 0, 0, 0);
	var Feb10 = new Date(2016, 1, 10, 0, 0, 0, 0);
	var Feb17 = new Date(2016, 1, 17, 0, 0, 0, 0);
	var Feb24 = new Date(2016, 1, 24, 0, 0, 0, 0);
	var Mar2 = new Date(2016, 2, 2, 0, 0, 0, 0);
	var Mar9 = new Date(2016, 2, 9, 0, 0, 0, 0);
	var Mar16 = new Date(2016, 2, 16, 0, 0, 0, 0);
	var Mar23 = new Date(2016, 2, 23, 0, 0, 0, 0);
	var Mar30 = new Date(2016, 2, 30, 0, 0, 0, 0);
	var Apr6 = new Date(2016, 3, 6, 0, 0, 0, 0);
	var Apr13 = new Date(2016, 3, 13, 0, 0, 0, 0);
	var Apr20 = new Date(2016, 3, 20, 0, 0, 0, 0);
	var Apr27 = new Date(2016, 3, 27, 0, 0, 0, 0);
	var May4 = new Date(2016, 4, 4, 0, 0, 0, 0);
	var May11 = new Date(2016, 4, 11, 0, 0, 0, 0);
	var May18 = new Date(2016, 4, 18, 0, 0, 0, 0);
	var May25 = new Date(2016, 4, 25, 0, 0, 0, 0);

//DISPLAY DATE FOR STAMPLAY 101
	if(Today > Dec30 && Today < Jan6) {
		document.getElementById('dateOfWebinar').innerHTML = "Wed Jan 1/6/16";
	}
	else if(Today > Jan6 && Today < Jan13) {
		document.getElementById('dateOfWebinar').innerHTML = "Wed Jan 1/13/16";
	}
	else if(Today > Jan13 && Today < Jan20) {
		document.getElementById('dateOfWebinar').innerHTML = "Wed Jan 1/20/16";
	}
	else if(Today > Jan20 && Today < Jan27) {
		document.getElementById('dateOfWebinar').innerHTML = "Wed Jan 1/27/16";
	}
	else if(Today > Jan27 && Today < Feb3) {
		document.getElementById('dateOfWebinar').innerHTML = "Wed Feb 2/3/16";
	}
	else if(Today > Feb3 && Today < Feb10) {
		document.getElementById('dateOfWebinar').innerHTML = "Wed Feb 2/10/16";
	}
	else if(Today > Feb10 && Today < Feb17) {
		document.getElementById('dateOfWebinar').innerHTML = "Wed Feb 2/17/16";
	}
	else if(Today > Feb17 && Today < Feb24) {
		document.getElementById('dateOfWebinar').innerHTML = "Wed Feb 2/24/16";
	}
	else if(Today > Feb24 && Today < Mar2) {
		document.getElementById('dateOfWebinar').innerHTML = "Wed Mar 3/2/16";
	}
	else if(Today > Mar2 && Today < Mar9) {
		document.getElementById('dateOfWebinar').innerHTML = "Wed Mar 3/9/16";
	}
	else if(Today > Mar9 && Today < Mar16) {
		document.getElementById('dateOfWebinar').innerHTML = "Wed Mar 3/16/16";
	}
	else if(Today > Mar16 && Today < Mar23) {
		document.getElementById('dateOfWebinar').innerHTML = "Wed Mar 3/23/16";
	}
	else if(Today > Mar23 && Today < Mar30) {
		document.getElementById('dateOfWebinar').innerHTML = "Wed Mar 3/30/16";
	}
	else if(Today > Mar30 && Today < Apr6) {
		document.getElementById('dateOfWebinar').innerHTML = "Wed Apr 4/6/16";
	}
	else if(Today > Apr6 && Today < Apr13) {
		document.getElementById('dateOfWebinar').innerHTML = "Wed Apr 4/13/16";
	}
	else if(Today > Apr13 && Today < Apr20) {
		document.getElementById('dateOfWebinar').innerHTML = "Wed Apr 4/20/16";
	}
	else if(Today > Apr20 && Today < Apr27) {
		document.getElementById('dateOfWebinar').innerHTML = "Wed Apr 4/27/16";
	}
	else if(Today > Apr27 && Today < May4) {
		document.getElementById('dateOfWebinar').innerHTML = "Wed Apr 5/4/16";
	}
	else if(Today > May4 && Today < May11) {
		document.getElementById('dateOfWebinar').innerHTML = "Wed Apr 5/11/16";
	}
	else if(Today > May11 && Today < May18) {
		document.getElementById('dateOfWebinar').innerHTML = "Wed Apr 5/18/16";
	}
	else if(Today > May18 && Today < May25) {
		document.getElementById('dateOfWebinar').innerHTML = "Wed Apr 5/25/16";
	}
};	

//REGISTER TO STAMPLAY 101

	function registerToStamplay101(){
		document.getElementById('loaderCircle').className = "center";
		var first = document.getElementById('first').value;
		var last = document.getElementById('last').value;
		var em = document.getElementById('em').value;
		var org = document.getElementById('org').value;

		var objectInstance = new Stamplay.Cobject('stamplay101').Model;
        objectInstance.set('firstName', first);
        objectInstance.set('lastName', last);
        objectInstance.set('email', em);
        objectInstance.set('organization', org);
        objectInstance.save().then(function(){

			document.getElementById('stamplay101RegisterSection').className = "row animated zoomOut";
			setTimeout(showMessage, 1000);

			function showMessage(){
				document.getElementById('confirmMessage').className = "center animated zoomIn";
				document.getElementById('loaderCircle').className = "hide center";

          		document.getElementById('first').value = "";
				document.getElementById('last').value = "";
				document.getElementById('em').value = "";
				document.getElementById('org').value = "";
			}
		});

	}



