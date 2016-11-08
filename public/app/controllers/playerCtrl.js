'use strict';

angular.module('badNewsApp').controller('PlayerCtrl', function($scope, $interval, $http){
    $scope.message = 'Hello from Player Controller';
    $scope.communicator = null;
    
    
    var getData = function () {
        return $http.get('/data').then(function(response){
            return response.data;
        });
    };
    
    console.log($scope);
    
    $interval(function(){
        getData().then(function(response){
            $scope.communicator = response;
            //console.log($scope);
        });
    }, 1000);
});