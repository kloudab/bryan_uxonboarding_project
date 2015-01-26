UserProfileApp.factory('UsersService', function(userIdFactory,usersFactory) {
  function getUsers() {
    return usersFactory.get().$promise;
  }

  function addUser(user) {
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
    addUser: addUser,
    updateUser: updateUser,
    removeUser: removeUser,
    getUser: getUser
  };
});