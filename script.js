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
