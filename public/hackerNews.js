
Stamplay.init('webinars');

//UPDATE WEBINAR DATE ON WINDOW LOAD
window.onload = function(){

//GLOBAL DAY/DATE VARIABLES
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

//WEBINAR DATES FOR HACKER NEWS
	var Dec31 = new Date(2015, 11, 31, 0, 0, 0, 0);
	var Jan7 = new Date(2016, 0, 7, 0, 0, 0, 0);
	var Jan14 = new Date(2016, 0, 14, 0, 0, 0, 0);
	var Jan21 = new Date(2016, 0, 21, 0, 0, 0, 0);
	var Jan28 = new Date(2016, 0, 28, 0, 0, 0, 0);
	var Feb4 = new Date(2016, 1, 4, 0, 0, 0, 0);
	var Feb11 = new Date(2016, 1, 11, 0, 0, 0, 0);
	var Feb18 = new Date(2016, 1, 18, 0, 0, 0, 0);
	var Feb25 = new Date(2016, 1, 25, 0, 0, 0, 0);
	var Mar3 = new Date(2016, 2, 3, 0, 0, 0, 0);
	var Mar10 = new Date(2016, 2, 10, 0, 0, 0, 0);
	var Mar17 = new Date(2016, 2, 17, 0, 0, 0, 0);
	var Mar24 = new Date(2016, 2, 24, 0, 0, 0, 0);
	var Mar31 = new Date(2016, 2, 31, 0, 0, 0, 0);
	var Apr7 = new Date(2016, 3, 7, 0, 0, 0, 0);
	var Apr14 = new Date(2016, 3, 14, 0, 0, 0, 0);
	var Apr21 = new Date(2016, 3, 21, 0, 0, 0, 0);
	var Apr28 = new Date(2016, 3, 28, 0, 0, 0, 0);
	var May5 = new Date(2016, 4, 5, 0, 0, 0, 0);
	var May12 = new Date(2016, 4, 12, 0, 0, 0, 0);
	var May19 = new Date(2016, 4, 19, 0, 0, 0, 0);
	var May26 = new Date(2016, 4, 26, 0, 0, 0, 0);


//DISPLAY DATE FOR HACKER NEWS
	if(Today > Dec31 && Today < Jan7) {
		console.log('hit');
		document.getElementById('dateOfWebinarHN').innerHTML = "Thu Jan 1/7/16";
	}
	// else if(Today > Jan7 && Today < Jan14) {
	// 	document.getElementById('dateOfWebinarHN').innerHTML = "Thu Jan 1/14/16";
	// }
	// else if(Today > Jan14 && Today < Jan21) {
	// 	document.getElementById('dateOfWebinarHN').innerHTML = "Thu Jan 1/21/16";
	// }
	// else if(Today > Jan20 && Today < Jan27) {
	// 	document.getElementById('dateOfWebinarHN').innerHTML = "Thu Jan 1/27/16";
	// }
	// else if(Today > Jan27 && Today < Feb3) {
	// 	document.getElementById('dateOfWebinarHN').innerHTML = "Thu Feb 2/3/16";
	// }
	// else if(Today > Feb3 && Today < Feb10) {
	// 	document.getElementById('dateOfWebinarHN').innerHTML = "Thu Feb 2/10/16";
	// }
	// else if(Today > Feb10 && Today < Feb17) {
	// 	document.getElementById('dateOfWebinarHN').innerHTML = "Thu Feb 2/17/16";
	// }
	// else if(Today > Feb17 && Today < Feb24) {
	// 	document.getElementById('dateOfWebinarHN').innerHTML = "Thu Feb 2/24/16";
	// }
	// else if(Today > Feb24 && Today < Mar2) {
	// 	document.getElementById('dateOfWebinarHN').innerHTML = "Thu Mar 3/2/16";
	// }
	// else if(Today > Mar2 && Today < Mar9) {
	// 	document.getElementById('dateOfWebinarHN').innerHTML = "Thu Mar 3/9/16";
	// }
	// else if(Today > Mar9 && Today < Mar16) {
	// 	document.getElementById('dateOfWebinarHN').innerHTML = "Thu Mar 3/16/16";
	// }
	// else if(Today > Mar16 && Today < Mar23) {
	// 	document.getElementById('dateOfWebinarHN').innerHTML = "Thu Mar 3/23/16";
	// }
	// else if(Today > Mar23 && Today < Mar30) {
	// 	document.getElementById('dateOfWebinarHN').innerHTML = "Thu Mar 3/30/16";
	// }
	// else if(Today > Mar30 && Today < Apr6) {
	// 	document.getElementById('dateOfWebinarHN').innerHTML = "Thu Apr 4/6/16";
	// }
	// else if(Today > Apr6 && Today < Apr13) {
	// 	document.getElementById('dateOfWebinarHN').innerHTML = "Thu Apr 4/13/16";
	// }
	// else if(Today > Apr13 && Today < Apr20) {
	// 	document.getElementById('dateOfWebinarHN').innerHTML = "Thu Apr 4/20/16";
	// }
	// else if(Today > Apr20 && Today < Apr27) {
	// 	document.getElementById('dateOfWebinarHN').innerHTML = "Thu Apr 4/27/16";
	// }
	// else if(Today > Apr27 && Today < May4) {
	// 	document.getElementById('dateOfWebinarHN').innerHTML = "Thu Apr 5/4/16";
	// }
	// else if(Today > May4 && Today < May11) {
	// 	document.getElementById('dateOfWebinarHN').innerHTML = "Thu Apr 5/11/16";
	// }
	// else if(Today > May11 && Today < May18) {
	// 	document.getElementById('dateOfWebinarHN').innerHTML = "Thu Apr 5/18/16";
	// }
	// else if(Today > May18 && Today < May25) {
	// 	document.getElementById('dateOfWebinarHN').innerHTML = "Thu Apr 5/25/16";
	// }
};	


//REGISTER TO HACKER NEWS
	function registerToHackernews(){
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