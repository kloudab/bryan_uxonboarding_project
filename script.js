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

UserProfileApp.factory('removeUserFactory', function($resource) {
  return $resource(
    'http://localhost:24149/users/:id',
    null,
    {remove: {method: 'DELETE'}}
  );
});

UserProfileApp.factory('UsersService', function(getUsersFactory,addUserFactory,
                                              updateUserFactory, removeUserFactory) {
  function getUsers() {
    return getUsersFactory.get().$promise;
  }

  function addUser(user) {
    return addUserFactory.save(user).$promise;
  }

  function updateUser(user) {
    return updateUserFactory.update(user).$promise;
  }

  function removeUser(user) {
    return removeUserFactory.remove(user).$promise;
  }

  return {
    get: getUsers,
    post: addUser,
    put: updateUser,
    remove: removeUser
  };
});

UserProfileApp.controller('usersController', function($scope, UsersService) {
  UsersService.get().then(function(usersList) {
    $scope.users = usersList;
  }, function(error) {
    console.log(error);
  });
});
