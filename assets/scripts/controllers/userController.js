UserProfileApp.controller('userController', function($scope, usersService) {

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
		}, function(error) {
			console.log(error);
		});
	};

});
