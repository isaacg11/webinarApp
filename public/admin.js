Stamplay.init('webinars');


window.onload = function(){

//GET WEBINAR DATA
    var objectInstance = new Stamplay.Cobject('webinar1').Model;
    objectInstance.fetch('568899a93b7a92633575ca99').then(function() {
    	var webinar1Title = objectInstance.instance.title;
        var webinar1SubTitle = objectInstance.instance.subtitle;
        var webinar1Description = objectInstance.instance.description;
        var webinar1Day = objectInstance.instance.day;
        var webinar1Time = objectInstance.instance.time;
        var webinar1AMPM = objectInstance.instance.ampm;

        document.getElementById('webinar1Title').innerHTML = webinar1Title;
        document.getElementById('webinar1SubTitle').innerHTML = webinar1SubTitle;
        document.getElementById('webinar1Description').innerHTML = webinar1Description;
        document.getElementById('webinar1Day').innerHTML = webinar1Day;
        document.getElementById('webinar1Time').innerHTML = webinar1Time;
        document.getElementById('webinar1AMPM').innerHTML = webinar1AMPM;
    });
};