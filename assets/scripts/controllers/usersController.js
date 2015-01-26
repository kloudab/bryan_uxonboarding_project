UserProfileApp.controller('usersController', function($scope, UsersService) {
  
  UsersService.get().then(function(usersList) {
    $scope.users = usersList;
  }, function(error) {
    console.log(error);
  });
  
});
