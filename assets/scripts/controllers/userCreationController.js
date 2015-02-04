UserProfileApp.controller('userCreationController', function($scope, $location, usersService) {

	$scope.placeholder = {
		firstName : "Your first name here",
		lastName : "Your last name here",
		phone : "Your phone number here 000-000-0000",
		email : "Your email address here"
	};

	$scope.createUser = function(user) {
		usersService.createUser(user).then(function(user) {
	     	console.log("Successfully Created!");
	     	$scope.clearForm();
		}, function(error) {
	     	console.log(error);
		});
	};

	$scope.clearForm = function() {
		$scope.createProfileForm.$setPristine();
		$scope.user = {};
	}
});
