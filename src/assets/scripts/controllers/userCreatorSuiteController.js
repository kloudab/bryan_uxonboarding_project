UserProfileApp.controller('userCreatorSuiteController', function($scope, $location, usersService) {

	$scope.createUser = function(user) {
		usersService.createUser(user).then(function() {
	     	console.log("Successfully Created!");
	     	$scope.clearForm();
		}, function(error) {
	     	console.log(error);
		});
	};

	$scope.clearForm = function() {
		$scope.resetUser();
		$scope.createProfileForm.$setPristine();
	}

	$scope.resetUser = function() {
		$scope.user = {
			firstName : "",
			lastName : "",
			phone : "",
			email : ""
		};
	};

	$scope.placeholder = {
		firstName : "Your first name here",
		lastName : "Your last name here",
		phone : "Your phone# here (xxx) xxx-xxxx",
		email : "Your email address here"
	};

	$scope.alertInformation = function() {
		alert("Format Options for Phone Number:\n\n" +
			  "Preferred- (xxx) xxx-xxxx\n" + 
			  "Accepted- xxx xxx xxxx\n" + 
			  "Accepted- xxx-xxx-xxxx");
	}

	$scope.phonePattern = /^\(?(\d{3})\)?[- | ''](\d{3})[- | ''](\d{4})$/;
});
