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
    editTitle : function(title, id){
      var q = $q.defer();
      var webinarInstance = new Stamplay.Cobject('webinar1').Model;
      webinarInstance.fetch(id).then(function(){
        webinarInstance.set('title', title);
        webinarInstance.save();
        q.resolve();
      });
      return q.promise;
    }
  };


}
})();