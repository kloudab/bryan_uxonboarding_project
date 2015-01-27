UserProfileApp.controller('userController', function($scope, UsersService) {

	$scope.getUser = function(id) { 
		UsersService.getUser(id).then(function(user) {
			$scope.user = user;
		}, function(error) {
			console.log(error);
		});
	};

	$scope.updateUser = function(id) {
		UsersService.updateUser(id).then(function() {
			console.log("User Successfully Updated!");
		}, function(error) {
			console.log(error);
		});
	};

	$scope.removeUser = function(id) {
		UsersService.removeUser(id).then(function() {
      		console.log("User Successfully Removed!");
		}, function(error) {
			console.log(error);
		});
	};

	$scope.createUser = function(user) {
		UsersService.createUser(user).then(function(user) {
			console.log(user)
     		console.log("Successfully Created!");
		}, function(error) {
      		console.log("PIE")
			console.log(error);
		});
	};

});
