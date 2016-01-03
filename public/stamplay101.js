Stamplay.init('webinars');


window.onload = function(){

//GLOBAL VARIABLES
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

    var objectInstance = new Stamplay.Cobject('stamplay101day').Model;
    objectInstance.fetch('568879153b7a92633575ca98').then(function() {
        var webinarDay = objectInstance.instance.day;

//DISPLAY WEBINAR DATE IF MON
        if(today === "Sunday" && webinarDay === "Monday"){
        var nextDateFromSunIfMon = d.setDate(d.getDate() + 1);
        var scheduledDateFromSunIfMon = new Date(nextDateFromSunIfMon);
        document.getElementById('dateOfWebinar').innerHTML = scheduledDateFromSunIfMon;
        }

        if(today === "Monday" && webinarDay === "Monday"){
        var nextDateFromMonIfMon = d.setDate(d.getDate() + 7);
        var scheduledDateFromMonIfMon = new Date(nextDateFromMonIfMon);
        document.getElementById('dateOfWebinar').innerHTML = scheduledDateFromMonIfMon;
        }

        if(today === "Tuesday" && webinarDay === "Monday"){
        var nextDateFromTuesIfMon = d.setDate(d.getDate() + 6);
        var scheduledDateFromTuesIfMon = new Date(nextDateFromTuesIfMon);
        document.getElementById('dateOfWebinar').innerHTML = scheduledDateFromTuesIfMon;
        }

        if(today === "Wednesday" && webinarDay === "Monday"){
        var nextDateFromWedIfWed = d.setDate(d.getDate() + 7);
        var scheduledDateFromWedIfWed = new Date(nextDateFromWedIfWed);
        document.getElementById('dateOfWebinar').innerHTML = scheduledDateFromWedIfWed;
        }

        if(today === "Thursday" && webinarDay === "Monday"){
        var nextDateFromThurIfWed = d.setDate(d.getDate() + 6);
        var scheduledDateFromThurIfWed = new Date(nextDateFromThurIfWed);
        document.getElementById('dateOfWebinar').innerHTML = scheduledDateFromThurIfWed;
        }

        if(today === "Friday" && webinarDay === "Monday"){
        var nextDateFromFriIfWed = d.setDate(d.getDate() + 5);
        var scheduledDateFromFriIfWed = new Date(nextDateFromFriIfWed);
        document.getElementById('dateOfWebinar').innerHTML = scheduledDateFromFriIfWed;
        }

        if(today === "Saturday" && webinarDay === "Monday"){
        var nextDateFromSatIfWed = d.setDate(d.getDate() + 4);
        var scheduledDateFromSatIfWed = new Date(nextDateFromSatIfWed);
        document.getElementById('dateOfWebinar').innerHTML = scheduledDateFromSatIfWed;
        }


//DISPLAY WEBINAR DATE IF WED
        if(today === "Sunday" && webinarDay === "Wednesday"){
        var nextDateFromSunIfWed = d.setDate(d.getDate() + 3);
        var scheduledDateFromSunIfWed = new Date(nextDateFromSunIfWed);
        document.getElementById('dateOfWebinar').innerHTML = scheduledDateFromSunIfWed;
        }

        if(today === "Monday" && webinarDay === "Wednesday"){
        var nextDateFromMonIfWed = d.setDate(d.getDate() + 2);
        var scheduledDateFromMonIfWed = new Date(nextDateFromMonIfWed);
        document.getElementById('dateOfWebinar').innerHTML = scheduledDateFromMonIfWed;
        }

        if(today === "Tuesday" && webinarDay === "Wednesday"){
        var nextDateFromTuesIfWed = d.setDate(d.getDate() + 1);
        var scheduledDateFromTuesIfWed = new Date(nextDateFromTuesIfWed);
        document.getElementById('dateOfWebinar').innerHTML = scheduledDateFromTuesIfWed;
        }

        if(today === "Wednesday" && webinarDay === "Wednesday"){
        var nextDateFromWedIfWed = d.setDate(d.getDate() + 7);
        var scheduledDateFromWedIfWed = new Date(nextDateFromWedIfWed);
        document.getElementById('dateOfWebinar').innerHTML = scheduledDateFromWedIfWed;
        }

        if(today === "Thursday" && webinarDay === "Wednesday"){
        var nextDateFromThurIfWed = d.setDate(d.getDate() + 6);
        var scheduledDateFromThurIfWed = new Date(nextDateFromThurIfWed);
        document.getElementById('dateOfWebinar').innerHTML = scheduledDateFromThurIfWed;
        }

        if(today === "Friday" && webinarDay === "Wednesday"){
        var nextDateFromFriIfWed = d.setDate(d.getDate() + 5);
        var scheduledDateFromFriIfWed = new Date(nextDateFromFriIfWed);
        document.getElementById('dateOfWebinar').innerHTML = scheduledDateFromFriIfWed;
        }

        if(today === "Saturday" && webinarDay === "Wednesday"){
        var nextDateFromSatIfWed = d.setDate(d.getDate() + 4);
        var scheduledDateFromSatIfWed = new Date(nextDateFromSatIfWed);
        document.getElementById('dateOfWebinar').innerHTML = scheduledDateFromSatIfWed;
        }
    });

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