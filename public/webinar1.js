Stamplay.init('webinars');


window.onload = function(){

//GET WEBINAR DATA
    var objectInstance = new Stamplay.Cobject('webinar1').Model;
    objectInstance.fetch('568899a93b7a92633575ca99').then(function() {
        var webinarDay = objectInstance.instance.day;
        var webinarTime = objectInstance.instance.time;
        var webinarAMPM = objectInstance.instance.ampm;
        var webinarTitle = objectInstance.instance.title;
        var webinarSubTitle = objectInstance.instance.subtitle;

        document.getElementById('webinar1Title').innerHTML = webinarTitle;
        document.getElementById('webinar1SubTitle').innerHTML = webinarSubTitle;

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
        document.getElementById('dateOfWebinar').innerHTML = 
        webinarDay+ " "+scheduledDateFromSunIfMon.toLocaleDateString()+" "+webinarTime+webinarAMPM+" "+"PST";
        }

        if(today === "Monday" && webinarDay === "Monday"){
        var nextDateFromMonIfMon = d.setDate(d.getDate() + 7);
        var scheduledDateFromMonIfMon = new Date(nextDateFromMonIfMon);
        document.getElementById('dateOfWebinar').innerHTML = 
        webinarDay+ " "+scheduledDateFromMonIfMon.toLocaleDateString()+" "+webinarTime+webinarAMPM+" "+"PST";
        }

        if(today === "Tuesday" && webinarDay === "Monday"){
        var nextDateFromTuesIfMon = d.setDate(d.getDate() + 6);
        var scheduledDateFromTuesIfMon = new Date(nextDateFromTuesIfMon);
        document.getElementById('dateOfWebinar').innerHTML = 
        webinarDay+ " "+scheduledDateFromTuesIfMon.toLocaleDateString()+" "+webinarTime+webinarAMPM+" "+"PST";
        }

        if(today === "Wednesday" && webinarDay === "Monday"){
        var nextDateFromWedIfMon = d.setDate(d.getDate() + 5);
        var scheduledDateFromWedIfMon = new Date(nextDateFromWedIfMon);
        document.getElementById('dateOfWebinar').innerHTML = 
        webinarDay+ " "+scheduledDateFromWedIfMon.toLocaleDateString()+" "+webinarTime+webinarAMPM+" "+"PST";
        }

        if(today === "Thursday" && webinarDay === "Monday"){
        var nextDateFromThurIfMon = d.setDate(d.getDate() + 4);
        var scheduledDateFromThurIfMon = new Date(nextDateFromThurIfMon);
        document.getElementById('dateOfWebinar').innerHTML = 
        webinarDay+ " "+scheduledDateFromThurIfMon.toLocaleDateString()+" "+webinarTime+webinarAMPM+" "+"PST";
        }

        if(today === "Friday" && webinarDay === "Monday"){
        var nextDateFromFriIfMon = d.setDate(d.getDate() + 3);
        var scheduledDateFromFriIfMon = new Date(nextDateFromFriIfMon);
        document.getElementById('dateOfWebinar').innerHTML = 
        webinarDay+ " "+scheduledDateFromFriIfMon.toLocaleDateString()+" "+webinarTime+webinarAMPM+" "+"PST";
        }

        if(today === "Saturday" && webinarDay === "Monday"){
        var nextDateFromSatIfMon = d.setDate(d.getDate() + 2);
        var scheduledDateFromSatIfMon = new Date(nextDateFromSatIfMon);
        document.getElementById('dateOfWebinar').innerHTML = 
        webinarDay+ " "+scheduledDateFromSatIfMon.toLocaleDateString()+" "+webinarTime+webinarAMPM+" "+"PST";
        }

//DISPLAY WEBINAR DATE IF TUES
        if(today === "Sunday" && webinarDay === "Tuesday"){
        var nextDateFromSunIfTues = d.setDate(d.getDate() + 2);
        var scheduledDateFromSunIfTues = new Date(nextDateFromSunIfTues);
        document.getElementById('dateOfWebinar').innerHTML = 
        webinarDay+ " "+scheduledDateFromSunIfTues.toLocaleDateString()+" "+webinarTime+webinarAMPM+" "+"PST";
        }

        if(today === "Monday" && webinarDay === "Tuesday"){
        var nextDateFromMonIfTues = d.setDate(d.getDate() + 1);
        var scheduledDateFromMonIfTues = new Date(nextDateFromMonIfTues);
        document.getElementById('dateOfWebinar').innerHTML = 
        webinarDay+ " "+scheduledDateFromMonIfTues.toLocaleDateString()+" "+webinarTime+webinarAMPM+" "+"PST";
        }

        if(today === "Tuesday" && webinarDay === "Tuesday"){
        var nextDateFromTuesIfTues = d.setDate(d.getDate() + 7);
        var scheduledDateFromTuesIfTues = new Date(nextDateFromTuesIfTues);
        document.getElementById('dateOfWebinar').innerHTML = 
        webinarDay+ " "+scheduledDateFromTuesIfTues.toLocaleDateString()+" "+webinarTime+webinarAMPM+" "+"PST";
        }

        if(today === "Wednesday" && webinarDay === "Tuesday"){
        var nextDateFromWedIfTues = d.setDate(d.getDate() + 6);
        var scheduledDateFromWedIfTues = new Date(nextDateFromWedIfTues);
        document.getElementById('dateOfWebinar').innerHTML = 
        webinarDay+ " "+scheduledDateFromWedIfTues.toLocaleDateString()+" "+webinarTime+webinarAMPM+" "+"PST";
        }

        if(today === "Thursday" && webinarDay === "Tuesday"){
        var nextDateFromThurIfTues = d.setDate(d.getDate() + 5);
        var scheduledDateFromThurIfTues = new Date(nextDateFromThurIfTues);
        document.getElementById('dateOfWebinar').innerHTML = 
        webinarDay+ " "+scheduledDateFromThurIfTues.toLocaleDateString()+" "+webinarTime+webinarAMPM+" "+"PST";
        }

        if(today === "Friday" && webinarDay === "Tuesday"){
        var nextDateFromFriIfTues = d.setDate(d.getDate() + 4);
        var scheduledDateFromFriIfTues = new Date(nextDateFromFriIfTues);
        document.getElementById('dateOfWebinar').innerHTML = 
        webinarDay+ " "+scheduledDateFromFriIfTues.toLocaleDateString()+" "+webinarTime+webinarAMPM+" "+"PST";
        }

        if(today === "Saturday" && webinarDay === "Tuesday"){
        var nextDateFromSatIfTues = d.setDate(d.getDate() + 3);
        var scheduledDateFromSatIfTues = new Date(nextDateFromSatIfTues);
        document.getElementById('dateOfWebinar').innerHTML = 
        webinarDay+ " "+scheduledDateFromSatIfTues.toLocaleDateString()+" "+webinarTime+webinarAMPM+" "+"PST";
        }

//DISPLAY WEBINAR DATE IF WED
        if(today === "Sunday" && webinarDay === "Wednesday"){
        var nextDateFromSunIfWed = d.setDate(d.getDate() + 3);
        var scheduledDateFromSunIfWed = new Date(nextDateFromSunIfWed);
        document.getElementById('dateOfWebinar').innerHTML = 
        webinarDay+ " "+scheduledDateFromSunIfWed.toLocaleDateString()+" "+webinarTime+webinarAMPM+" "+"PST";
        }

        if(today === "Monday" && webinarDay === "Wednesday"){
        var nextDateFromMonIfWed = d.setDate(d.getDate() + 2);
        var scheduledDateFromMonIfWed = new Date(nextDateFromMonIfWed);
        document.getElementById('dateOfWebinar').innerHTML = 
        webinarDay+ " "+scheduledDateFromMonIfWed.toLocaleDateString()+" "+webinarTime+webinarAMPM+" "+"PST";
        }

        if(today === "Tuesday" && webinarDay === "Wednesday"){
        var nextDateFromTuesIfWed = d.setDate(d.getDate() + 1);
        var scheduledDateFromTuesIfWed = new Date(nextDateFromTuesIfWed);
        document.getElementById('dateOfWebinar').innerHTML = 
        webinarDay+ " "+scheduledDateFromTuesIfWed.toLocaleDateString()+" "+webinarTime+webinarAMPM+" "+"PST";
        }

        if(today === "Wednesday" && webinarDay === "Wednesday"){
        var nextDateFromWedIfWed = d.setDate(d.getDate() + 7);
        var scheduledDateFromWedIfWed = new Date(nextDateFromWedIfWed);
        document.getElementById('dateOfWebinar').innerHTML = 
        webinarDay+ " "+scheduledDateFromWedIfWed.toLocaleDateString()+" "+webinarTime+webinarAMPM+" "+"PST";
        }

        if(today === "Thursday" && webinarDay === "Wednesday"){
        var nextDateFromThurIfWed = d.setDate(d.getDate() + 6);
        var scheduledDateFromThurIfWed = new Date(nextDateFromThurIfWed);
        document.getElementById('dateOfWebinar').innerHTML = 
        webinarDay+ " "+scheduledDateFromThurIfWed.toLocaleDateString()+" "+webinarTime+webinarAMPM+" "+"PST";
        }

        if(today === "Friday" && webinarDay === "Wednesday"){
        var nextDateFromFriIfWed = d.setDate(d.getDate() + 5);
        var scheduledDateFromFriIfWed = new Date(nextDateFromFriIfWed);
        document.getElementById('dateOfWebinar').innerHTML = 
        webinarDay+ " "+scheduledDateFromFriIfWed.toLocaleDateString()+" "+webinarTime+webinarAMPM+" "+"PST";
        }

        if(today === "Saturday" && webinarDay === "Wednesday"){
        var nextDateFromSatIfWed = d.setDate(d.getDate() + 4);
        var scheduledDateFromSatIfWed = new Date(nextDateFromSatIfWed);
        document.getElementById('dateOfWebinar').innerHTML = 
        webinarDay+ " "+scheduledDateFromSatIfWed.toLocaleDateString()+" "+webinarTime+webinarAMPM+" "+"PST";
        }

//DISPLAY WEBINAR DATE IF THUR
        if(today === "Sunday" && webinarDay === "Thursday"){
        var nextDateFromSunIfThur = d.setDate(d.getDate() + 4);
        var scheduledDateFromSunIfThur = new Date(nextDateFromSunIfThur);
        document.getElementById('dateOfWebinar').innerHTML = 
        webinarDay+ " "+scheduledDateFromSunIfThur.toLocaleDateString()+" "+webinarTime+webinarAMPM+" "+"PST";
        }

        if(today === "Monday" && webinarDay === "Thursday"){
        var nextDateFromMonIfThur = d.setDate(d.getDate() + 3);
        var scheduledDateFromMonIfThur = new Date(nextDateFromMonIfThur);
        document.getElementById('dateOfWebinar').innerHTML = 
        webinarDay+ " "+scheduledDateFromMonIfThur.toLocaleDateString()+" "+webinarTime+webinarAMPM+" "+"PST";
        }

        if(today === "Tuesday" && webinarDay === "Thursday"){
        var nextDateFromTuesIfThur = d.setDate(d.getDate() + 2);
        var scheduledDateFromTuesIfThur = new Date(nextDateFromTuesIfThur);
        document.getElementById('dateOfWebinar').innerHTML = 
        webinarDay+ " "+scheduledDateFromTuesIfThur.toLocaleDateString()+" "+webinarTime+webinarAMPM+" "+"PST";
        }

        if(today === "Wednesday" && webinarDay === "Thursday"){
        var nextDateFromWedIfThur = d.setDate(d.getDate() + 1);
        var scheduledDateFromWedIfThur = new Date(nextDateFromWedIfThur);
        document.getElementById('dateOfWebinar').innerHTML = 
        webinarDay+ " "+scheduledDateFromWedIfThur.toLocaleDateString()+" "+webinarTime+webinarAMPM+" "+"PST";
        }

        if(today === "Thursday" && webinarDay === "Thursday"){
        var nextDateFromThurIfThur = d.setDate(d.getDate() + 7);
        var scheduledDateFromThurIfThur = new Date(nextDateFromThurIfThur);
        document.getElementById('dateOfWebinar').innerHTML = 
        webinarDay+ " "+scheduledDateFromThurIfThur.toLocaleDateString()+" "+webinarTime+webinarAMPM+" "+"PST";
        }

        if(today === "Friday" && webinarDay === "Thursday"){
        var nextDateFromFriIfThur = d.setDate(d.getDate() + 6);
        var scheduledDateFromFriIfThur = new Date(nextDateFromFriIfThur);
        document.getElementById('dateOfWebinar').innerHTML = 
        webinarDay+ " "+scheduledDateFromFriIfThur.toLocaleDateString()+" "+webinarTime+webinarAMPM+" "+"PST";
        }

        if(today === "Saturday" && webinarDay === "Thursday"){
        var nextDateFromSatIfThur = d.setDate(d.getDate() + 5);
        var scheduledDateFromSatIfThur = new Date(nextDateFromSatIfThur);
        document.getElementById('dateOfWebinar').innerHTML = 
        webinarDay+ " "+scheduledDateFromSatIfThur.toLocaleDateString()+" "+webinarTime+webinarAMPM+" "+"PST";
        }

//DISPLAY WEBINAR DATE IF FRI
        if(today === "Sunday" && webinarDay === "Friday"){
        var nextDateFromSunIfFri = d.setDate(d.getDate() + 5);
        var scheduledDateFromSunIfFri = new Date(nextDateFromSunIfFri);
        document.getElementById('dateOfWebinar').innerHTML = 
        webinarDay+ " "+scheduledDateFromSunIfFri.toLocaleDateString()+" "+webinarTime+webinarAMPM+" "+"PST";
        }

        if(today === "Monday" && webinarDay === "Friday"){
        var nextDateFromMonIfFri = d.setDate(d.getDate() + 4);
        var scheduledDateFromMonIfFri = new Date(nextDateFromMonIfFri);
        document.getElementById('dateOfWebinar').innerHTML = 
        webinarDay+ " "+scheduledDateFromMonIfFri.toLocaleDateString()+" "+webinarTime+webinarAMPM+" "+"PST";
        }

        if(today === "Tuesday" && webinarDay === "Friday"){
        var nextDateFromTuesIfFri = d.setDate(d.getDate() + 3);
        var scheduledDateFromTuesIfFri = new Date(nextDateFromTuesIfFri);
        document.getElementById('dateOfWebinar').innerHTML = 
        webinarDay+ " "+scheduledDateFromTuesIfFri.toLocaleDateString()+" "+webinarTime+webinarAMPM+" "+"PST";
        }

        if(today === "Wednesday" && webinarDay === "Friday"){
        var nextDateFromWedIfFri = d.setDate(d.getDate() + 2);
        var scheduledDateFromWedIfFri = new Date(nextDateFromWedIfFri);
        document.getElementById('dateOfWebinar').innerHTML = 
        webinarDay+ " "+scheduledDateFromWedIfFri.toLocaleDateString()+" "+webinarTime+webinarAMPM+" "+"PST";
        }

        if(today === "Thursday" && webinarDay === "Friday"){
        var nextDateFromThurIfFri = d.setDate(d.getDate() + 1);
        var scheduledDateFromThurIfFri = new Date(nextDateFromThurIfFri);
        document.getElementById('dateOfWebinar').innerHTML = 
        webinarDay+ " "+scheduledDateFromThurIfFri.toLocaleDateString()+" "+webinarTime+webinarAMPM+" "+"PST";
        }

        if(today === "Friday" && webinarDay === "Friday"){
        var nextDateFromFriIfFri = d.setDate(d.getDate() + 7);
        var scheduledDateFromFriIfFri = new Date(nextDateFromFriIfFri);
        document.getElementById('dateOfWebinar').innerHTML = 
        webinarDay+ " "+scheduledDateFromFriIfFri.toLocaleDateString()+" "+webinarTime+webinarAMPM+" "+"PST";
        }

        if(today === "Saturday" && webinarDay === "Friday"){
        var nextDateFromSatIfFri = d.setDate(d.getDate() + 6);
        var scheduledDateFromSatIfFri = new Date(nextDateFromSatIfFri);
        document.getElementById('dateOfWebinar').innerHTML = 
        webinarDay+ " "+scheduledDateFromSatIfFri.toLocaleDateString()+" "+webinarTime+webinarAMPM+" "+"PST";
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