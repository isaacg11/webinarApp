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
    }
  };


}
})();