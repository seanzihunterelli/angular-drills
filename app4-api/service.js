angular.module('apiApp').service('apiService',function($http){
  var url = 'http://smurfs.devmounta.in/smurfs/';

  this.getData = function(){
    return $http.get(url);
  };

});
