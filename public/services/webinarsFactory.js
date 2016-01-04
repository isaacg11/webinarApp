Stamplay.init('webinars');

//FACTORY

(function() {
  'use strict';
  angular.module('stamplay')
  .factory('webinarsFactory', webinarsFactory);
  webinarsFactory.$inject = ['$http', '$q'];

  function webinarsFactory($http, $q) {

  return {
    getWebinarsForAdmin : function(){
      var q = $q.defer();
      var webinarCollection = new Stamplay.Cobject('webinar1').Collection;
      webinarCollection.equalTo("type", "webinar").fetch().then(function(){
        q.resolve(webinarCollection.instance);
      });
      return q.promise;
    },
    editWebinar : function(id, details){
      var q = $q.defer();
      var objectInstance = new Stamplay.Cobject('webinar1').Model;
      objectInstance.fetch(id).then(function() {
        var newTitle = details.title;
        objectInstance.set('title', newTitle);
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
    }
  };


}
})();