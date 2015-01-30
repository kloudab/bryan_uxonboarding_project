UserProfileApp.controller('usersController', function($scope, usersService) {
  
  usersService.getUsers().then(function(usersList) {
    $scope.users = usersList;
  }, function(error) {
    console.log(error);
  });
  
});
