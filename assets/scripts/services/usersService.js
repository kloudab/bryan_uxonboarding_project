UserProfileApp.factory('usersService', function(userIdFactory,usersFactory) {
  function getUsers() {
    return usersFactory.get().$promise;
  }

  function createUser(user) {
    return usersFactory.create(user).$promise;
  }

  function updateUser(user) {
    return userIdFactory.update(user).$promise;
  }

  function removeUser(id) {
    return userIdFactory.remove(id).$promise;
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