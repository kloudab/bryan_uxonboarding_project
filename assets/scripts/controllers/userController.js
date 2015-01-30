UserProfileApp.controller('userController', function($scope, usersService) {

	$scope.placeholder = {
		firstName : "Your first name here",
		lastName : "Your last name here",
		phone : "Your phone number here",
		email : "Your email address here"
	};

	$scope.getUser = function(id) { 
		usersService.getUser(id).then(function(user) {
			$scope.user = user;
		}, function(error) {
			console.log(error);
		});
	};

	$scope.updateUser = function(id) {
		usersService.updateUser(id).then(function() {
			console.log("User Successfully Updated!");
		}, function(error) {
			console.log(error);
		});
	};

	$scope.removeUser = function(id) {
		usersService.removeUser(id).then(function() {
      		console.log("User Successfully Removed!");
		}, function(error) {
			console.log(error);
		});
	};

	$scope.createUser = function(user) {
		usersService.createUser(user).then(function(user) {
     		console.log("Successfully Created!");
     		alert("User Successfully Created!")
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
