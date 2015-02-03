UserProfileApp.service("userService", function() {

  function setUser(user) {
    this.user = user;
  }

  function getUser() {
    return this.user;
  }

  return {
    setUser: setUser,
    getUser: getUser
  }
});
