UserProfileApp.controller('userEditController', function($scope, $location, userService, usersService) {
	
	$scope.user = userService.getUser();

	$scope.saveUserEdits = function(user) {
		var userId = {id: user._id};
		usersService.updateUser(user);
	}

	$scope.discardUserEdits = function() {
		$location.path("/profile_view");
	}

})
