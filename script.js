// script.js

angular.module('TimesCalculator',[]);

angular.module('TimesCalculator')
.controller('TwoTimesController',['$scope',function($scope){
$scope.multiply=function(input){
  return 2*input;
}; 
}]);

angular.module('TimesCalculator')
.controller('ThreeTimesController',['$scope',function($scope){
$scope.multiply=function(input){
  return 3*input;
}; 
}]);