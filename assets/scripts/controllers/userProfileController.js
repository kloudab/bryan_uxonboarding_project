UserProfileApp.controller('userProfileController', function($scope, $location, usersService) {

  usersService.getUserById($scope.id).then(function(users) {
    $scope.user = users[0]; //ERROR returning a list of users instead of a user
  }, function(error) {
    console.log(error);
  });

  $scope.toggleShowName = function() {
    $scope.showName = !$scope.showName;
    if ($scope.showName == true) {
      $scope.showNameButtonText = "Hide Name"
    } else {
      $scope.showNameButtonText = "Show Name"
    };
  };

  $scope.toggleShowContact = function() {
    $scope.showContact = !$scope.showContact
    if ($scope.showContact == true) {
      $scope.showContactButtonText = "Hide Contact"
    } else {
      $scope.showContactButtonText = "Show Contact"
    };
  };

  $scope.removeUser = function(user) {
    var userId = {id: user._id};
    usersService.removeUser(userId).then(function() {
      console.log("User successfully deleted!");
      $location.path('/search_users');
    }, function(error) {
      console.log(error);
    });
  };
  
  $scope.showName = true;
  $scope.showContact = true;
  $scope.showNameButtonText = "Hide Name";
  $scope.showContactButtonText = "Hide Contact";

});
