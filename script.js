var UserProfileApp = angular.module('UserProfileApp', ['ui.router', 'ngResource']);

UserProfileApp.controller('UserProfileController', function($scope, $resource) {
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

UserProfileApp.factory('getUsersFactory', function($resource) {
  return $resource(
    'http://localhost:24149/users',
    null,
    {get: {method: 'GET', isArray: true}}
  );
});

UserProfileApp.factory('addUserFactory', function($resource) {
  return $resource(
    'http://localhost:24149/users',
    null,
    {save: {method: 'POST'}}
  );
});

UserProfileApp.factory('updateUserFactory', function($resource) {
  return $resource(
    'http://localhost:24149/users/:id',
    null,
    {update: {method: 'PUT'}}
  );
});

UserProfileApp.factory('deleteUserFactory', function($resource) {
  return $resource(
    'http://localhost:24149/users/:id',
    null,
    {delete: {method: 'DELETE'}}
  );
});

UserProfileApp.factory('UsersService', function(getUsersFactory,addUserFactory,
                                              updateUserFactory, deleteUserFactory) {
  function getUsers() {
    return getUsersFactory.get().$promise;
  }
  
  function addUser(user) {
    return addUserFactory.save(user).$promise;
  }
  
  function updateUser(user) {
    return updateUserFactory.update(user).$promise;
  }
  
  function deleteUser(user) {
    return deleteUserFactory.delete(user).$promise;
  }
  
  return {
    get: getUsers,
    post: addUser,
    put: updateUser,
    delete: deleteUser
  };
});

UserProfileApp.controller('usersController', function($scope, UsersService) {
  UsersService.get().then(function(usersList) {
    $scope.users = usersList;
  }, function(error) {
    console.log(error);
  });
});
  
UserProfileApp.directive('userEditingProfileView', function() {
  return {
    restrict: 'E',
    templateUrl: './assets/templates/userEditingProfileView.html'
  };
});

UserProfileApp.directive('usersListingView', function() {
  return {
    restrict: 'E',
    templateUrl: './assets/templates/usersListingView.html'
  };
});

  UserProfileApp.directive('userProfileView', function() {
  return {
    restrict: 'A',
    templateUrl: './assets/templates/userProfileView.html'
  };
});
