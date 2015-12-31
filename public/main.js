
//UPDATE WEBINAR DATE

window.onload = function(){
	var d = new Date();
	var weekday = new Array(7);
	weekday[0]=  "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";
	var n = weekday[d.getDay()];

	if(n === "Sunday"){
		var Sunday = new Date();
		var nextDateFromSunday = Sunday.setDate(Sunday.getDate() + 3);
		var scheduledDateFromSunday = new Date(nextDateFromSunday);
		console.log(scheduledDateFromSunday);
	}
	if(n === "Monday"){
		var Monday = new Date();
		var nextDateFromMonday = Monday.setDate(Monday.getDate() + 2);
		var scheduledDateFromMonday = new Date(nextDateFromMonday);
		console.log(scheduledDateFromMonday);
	}
	if(n === "Tuesday"){
		var Tuesday = new Date();
		var nextDateFromTuesday = Tuesday.setDate(Tuesday.getDate() + 1);
		var scheduledDateFromTuesday = new Date(nextDateFromTuesday);
		console.log(scheduledDateFromTuesday);
	}

};
