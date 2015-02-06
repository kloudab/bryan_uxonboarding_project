UserProfileApp.controller('userCreationController', function($scope, $location, usersService) {

	$scope.placeholder = {
		firstName : "Your first name here",
		lastName : "Your last name here",
		phone : "Your phone# here (xxx) xxx-xxxx",
		email : "Your email address here"
	};

	$scope.resetUser = function() {
		$scope.user = {
			firstName : "",
			lastName : "",
			phone : "",
			email : ""
		};
	}

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
		$scope.resetUser();
	}

	$scope.alertInformation = function() {
		alert("Format Options for Phone Number:\n\n" +
			  "Preferred- (xxx) xxx-xxxx\n" + 
			  "Accepted- xxx xxx xxxx\n" + 
			  "Accepted- xxx-xxx-xxxx");
	}

	$scope.phonePattern = /^\(?(\d{3})\)?[- | ''](\d{3})[- | ''](\d{4})$/;
});
