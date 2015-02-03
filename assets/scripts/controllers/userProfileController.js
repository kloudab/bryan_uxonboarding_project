UserProfileApp.controller('userProfileController', function($scope, $location,
                                                            usersService, userService) {
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

  var getUser = function() {
    return userService.getUser();
  };

  $scope.user = getUser();

  $scope.removeUser = function(user) {
    var userId = {id: user._id};
    usersService.removeUser(userId).then(function() {
      console.log("User successfully deleted!");
      $location.path('/search_users');
    }, function(error) {
      console.log(error);
    });
  };

  $scope.goToEditProfile = function() {
    $location.path('/edit');
  }

});
