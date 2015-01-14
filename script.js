var UserProfileApp = angular.module('UserProfileApp', ['ui.router', 'ngResource']);

UserProfileApp.controller('UserProfileController', function($scope) {
  $scope.profileVisibility = {
    showUserProfileView: true,
    showUserEditingProfileView: false,
    showOtherUsersView: false,
    showName: true,
    showContact: true
  };
  
  $scope.toggleUserProfileView = function() {
    $scope.profileVisibility.showUserProfileView = ($scope.profileVisibility.showUserProfileView === false ? true : false);
  };
  
  $scope.toggleUserEditingProfileView = function() {
    $scope.profileVisibility.showUserEditingProfileView = ($scope.profileVisibility.showUserEditingProfileView === false ? true : false);
  };
  
  $scope.toggleShowOtherUsersView = function() {
    $scope.profileVisibility.showOtherUsersView = ($scope.profileVisibility.showOtherUsersView === false ? true : false);
  };

  $scope.toggleContactInfo = function() {
    $scope.profileVisibility.showContact = ($scope.profileVisibility.showContact === false ? true : false);
  };
    
  $scope.toggleName = function() {
    $scope.profileVisibility.showName = ($scope.profileVisibility.showName === false ? true : false);
  };
});

UserProfileApp.directive('userProfileView', function() {
  return {
    restrict: 'A',
    templateUrl: './assets/templates/userProfileView.html'
  };
});
