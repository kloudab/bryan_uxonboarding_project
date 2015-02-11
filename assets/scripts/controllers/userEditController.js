UserProfileApp.controller('userEditController', function($scope, $location, usersService) {
	
  usersService.getUserById($scope.id).then(function(users) {
    $scope.user = users[0]; //ERROR returning a list of users instead of a user
  }, function(error) {
    console.log(error);
  });

	$scope.saveUserEdits = function(user) {
		var userId = {id: user._id};
		usersService.updateUser(user);
	}

	$scope.discardUserEdits = function() {
		$location.path("/profile_view");
	}

	$scope.alertInformation = function() {
		alert("Format Options for Phone Number:\n\n" +
			  "Preferred- (xxx) xxx-xxxx\n" + 
			  "Accepted- xxx xxx xxxx\n" + 
			  "Accepted- xxx-xxx-xxxx");
	}

})
