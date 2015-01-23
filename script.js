var UserProfileApp = angular.module('UserProfileApp', ['ui.router', 'ngResource']);

UserProfileApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
    })
    .state('profile_view', {
      url: '/profile_view',
      templateUrl: './assets/templates/userProfileView.html',
      controller: 'UserProfileController'
    })
    .state('edit', {
      url: '/edit',
      templateUrl: './assets/templates/userEditingProfileView.html'
    })
    .state('search_users', {
      url: '/search_users',
      templateUrl: './assets/templates/usersListingView.html'
    });
});

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
