UserProfileApp.controller('userSearchController', function($scope, $location,
                                                           userService, usersService) {
  
  usersService.getUsers().then(function(usersList) {
    $scope.users = usersList;
  }, function(error) {
    console.log(error);
  });

  $scope.goToProfile = function(user) {
    userService.setUser(user);
    $location.path("/profile_view");
  }

});
