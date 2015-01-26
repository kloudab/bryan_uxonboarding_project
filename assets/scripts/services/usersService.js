UserProfileApp.factory('UsersService', function(userIdFactory,usersFactory) {
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