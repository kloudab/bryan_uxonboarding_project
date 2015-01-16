var UserProfileApp = angular.module('UserProfileApp', ['ui.router', 'ngResource']);

UserProfileApp.controller('UserProfileController', function($scope) {
  $scope.profileVisibility = {
    showName: true,
    showContact: true
  };
    
  $scope.toggleContactInfo = function() {
    $scope.profileVisibility.showContact = ($scope.profileVisibility.showContact === false ? true : false);
  };
    
  $scope.toggleName = function() {
    $scope.profileVisibility.showName = ($scope.profileVisibility.showName === false ? true : false);
  };
});
