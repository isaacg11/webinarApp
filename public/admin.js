Stamplay.init('webinars');

window.onload = function(){
//GET WEBINAR DATA
	var objectInstance1 = new Stamplay.Cobject('webinar1').Model;
    objectInstance1.fetch('568899a93b7a92633575ca99').then(function() {
    	var webinar1Title = objectInstance1.instance.title;
        var webinar1SubTitle = objectInstance1.instance.subtitle;
        var webinar1Description = objectInstance1.instance.description;
        var webinar1Day = objectInstance1.instance.day;
        var webinar1Time = objectInstance1.instance.time;
        var webinar1AMPM = objectInstance1.instance.ampm;

        document.getElementById('webinar1Title').innerHTML = webinar1Title;
        document.getElementById('webinar1SubTitle').innerHTML = webinar1SubTitle;
        document.getElementById('webinar1Description').innerHTML = webinar1Description;
        document.getElementById('webinar1Day').innerHTML = webinar1Day;
        document.getElementById('webinar1Time').innerHTML = webinar1Time;
        document.getElementById('webinar1AMPM').innerHTML = webinar1AMPM;

    });
};

//OPEN EDIT FOR TITLE 1
	function openEditForTitle1(){
		document.getElementById('newTitle1Input').className = "";
		document.getElementById('newTitle1Btn').className = "";
	}
//OPEN EDIT FOR SUBTITLE 1
	function openEditForSubTitle1(){
		document.getElementById('newSubTitle1Input').className = "";
		document.getElementById('newSubTitle1Btn').className = "";
	}
//OPEN EDIT FOR DESCRIPTION 1
	function openEditForDescription1(){
		document.getElementById('newDescription1Input').className = "";
		document.getElementById('newDescription1Btn').className = "";
	}
//OPEN EDIT FOR DAY 1
	function openEditForDay1(){
		document.getElementById('newDay1Input').className = "browser-default";
		document.getElementById('newDay1Btn').className = "";
		document.getElementById('optdef').className = "";
		document.getElementById('opt1').className = "";
		document.getElementById('opt2').className = "";
		document.getElementById('opt3').className = "";
		document.getElementById('opt4').className = "";
		document.getElementById('opt5').className = "";
		document.getElementById('opt6').className = "";
		document.getElementById('opt7').className = "";
	}
//OPEN EDIT FOR TIME 1
	function openEditForTime1(){
		document.getElementById('newTime1Input').className = "browser-default";
		document.getElementById('newAMPM1Input').className = "browser-default";
		document.getElementById('newTime1Btn').className = "";
	}

//CHANGE TITLE 1
	function changeTitle1(){
		var newTitle = document.getElementById('newTitle1Input').value;
		var objectInstance1 = new Stamplay.Cobject('webinar1').Model;
    	objectInstance1.fetch('568899a93b7a92633575ca99').then(function() {
        	objectInstance1.set('title', newTitle);
        	objectInstance1.save().then(function(){
        		location.reload();
        	});
    	});
	}

//CHANGE SUBTITLE 1
	function changeSubTitle1(){
		var newSubTitle = document.getElementById('newSubTitle1Input').value;
		var objectInstance1 = new Stamplay.Cobject('webinar1').Model;
    	objectInstance1.fetch('568899a93b7a92633575ca99').then(function() {
        	objectInstance1.set('subtitle', newSubTitle);
        	objectInstance1.save().then(function(){
        		location.reload();
        	});
    	});
	}

//CHANGE DESCRIPTION 1
	function changeDescription1(){
		var newDescription = document.getElementById('newDescription1Input').value;
		var objectInstance1 = new Stamplay.Cobject('webinar1').Model;
    	objectInstance1.fetch('568899a93b7a92633575ca99').then(function() {
        	objectInstance1.set('description', newDescription);
        	objectInstance1.save().then(function(){
        		location.reload();
        	});
    	});
	}

//CHANGE DAY 1
	function changeDay1(){
		var select = document.getElementById("newDay1Input");
		var Day1 = select.options[select.selectedIndex].value;
		var objectInstance1 = new Stamplay.Cobject('webinar1').Model;
    	objectInstance1.fetch('568899a93b7a92633575ca99').then(function() {
        	objectInstance1.set('day', Day1);
        	objectInstance1.save().then(function(){
        		location.reload();
        	});
    	});
	}

//CHANGE TIME 1
	function changeTime1(){
		var selectTime = document.getElementById("newTime1Input");
		var Time1 = selectTime.options[selectTime.selectedIndex].value;
		var selectAMPM = document.getElementById("newAMPM1Input");
		var AMPM1 = selectAMPM.options[selectAMPM.selectedIndex].value;
		var objectInstance1 = new Stamplay.Cobject('webinar1').Model;
    	objectInstance1.fetch('568899a93b7a92633575ca99').then(function() {
        	objectInstance1.set('time', Time1);
        	objectInstance1.set('ampm', AMPM1);
        	objectInstance1.save().then(function(){
        		location.reload();
        	});
    	});
	}

