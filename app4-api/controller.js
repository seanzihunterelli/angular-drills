angular.module('apiApp').controller('apiCtrl',function($scope,apiService){
  apiService.getData().then(function(response){
    $scope.data = response.data;
    console.log($scope.data);
  });
});
