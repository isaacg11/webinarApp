Stamplay.init('webinars');

//FACTORY

(function() {
  'use strict';
  angular.module('stamplay')
  .factory('webinarsFactory', webinarsFactory);
  webinarsFactory.$inject = ['$http', '$q'];

  function webinarsFactory($http, $q) {

  return {
    getWebinars : function(){
      var q = $q.defer();
      var webinarCollection = new Stamplay.Cobject('webinar1').Collection;
      webinarCollection.equalTo("deleted_status", false).fetch().then(function(){
        q.resolve(webinarCollection.instance);
      });
      return q.promise;
    },
    editWebinar : function(id, details){
      var q = $q.defer();
      var objectInstance = new Stamplay.Cobject('webinar1').Model;
      objectInstance.fetch(id).then(function() {
        objectInstance.set('title', details.title);
        objectInstance.set('subtitle', details.subtitle);
        objectInstance.set('description', details.description);
        objectInstance.set('day', details.day);
        objectInstance.set('time', details.time);
        objectInstance.set('ampm', details.ampm);
        objectInstance.save().then(function(){
          q.resolve();
        });
      });
      return q.promise;
    },
    addWebinar : function(details){
      var q = $q.defer();
      var objectInstance = new Stamplay.Cobject('webinar1').Model;
        objectInstance.set('title', details.title);
        objectInstance.set('subtitle', details.subtitle);
        objectInstance.set('description', details.description);
        objectInstance.set('day', details.day);
        objectInstance.set('time', details.time);
        objectInstance.set('ampm', details.ampm);
        objectInstance.set('deleted_status', false);
        objectInstance.save().then(function(){
          q.resolve();
        });
      return q.promise;
    },
    eraseWebinar : function(id){
      var q = $q.defer();
      var objectInstance = new Stamplay.Cobject('webinar1').Model;
      objectInstance.fetch(id).then(function() {
        objectInstance.set('deleted_status', true);
        objectInstance.save().then(function(){
          q.resolve();
        });
      });
      return q.promise;
    },
    signup : function(info){
      console.log(info);
      var q = $q.defer();
      var objectInstance = new Stamplay.Cobject('signups').Model;
        objectInstance.set('firstName', info.firstName);
        objectInstance.set('lastName', info.lastName);
        objectInstance.set('email', info.email);
        objectInstance.set('organization', info.organization);
        objectInstance.set('webinar', info.webinar);
        objectInstance.set('webinarSubtitle', info.webinarSubtitle);
        objectInstance.set('webinarDay', info.webinarDay);
        objectInstance.set('webinarDate', info.webinarDate);
        objectInstance.set('webinarTime', info.webinarTime);
        objectInstance.set('webinarAMPM', info.webinarAMPM);
        objectInstance.save().then(function(){
          q.resolve();
        });
      return q.promise;
    }

  };


}
})();