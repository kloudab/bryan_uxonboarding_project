UserProfileApp.controller('userEditController', function($scope, $state, usersService) {
	
	usersService.getUserById($scope.id).then(function(user) {
		$scope.user = user;
	}, function(error) {
		console.log(error);
	});

	$scope.saveUserEdits = function(user) {
		usersService.updateUser(user).then (function() {
			alert("Success!");
			$state.go('profile',{id:user._id});
		}, function(error) {
			console.log(error)
		});
	}

	$scope.alertInformation = function() {
		alert("Format Options for Phone Number:\n\n" +
			"Preferred- (xxx) xxx-xxxx\n" + 
			"Accepted- xxx xxx xxxx\n" + 
			"Accepted- xxx-xxx-xxxx");
	}
})