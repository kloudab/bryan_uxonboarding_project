UserProfileApp.factory('UsersService', function(userIdFactory,usersFactory) {
  function getUsers() {
    return usersFactory.get().$promise;
  }

  function createUser(user) {
    return usersFactory.create(user).$promise;
  }

  function updateUser(user) {
    return userIdFactory.update(user).$promise;
  }

  function removeUser(user) {
    return userIdFactory.remove(user).$promise;
  }

  function getUser(id) {
    return userIdFactory.get(id).$promise;
  }

  return {
    getUsers: getUsers,
    createUser: createUser,
    updateUser: updateUser,
    removeUser: removeUser,
    getUser: getUser
  };
});