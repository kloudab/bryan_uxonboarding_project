
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
UserProfileApp.controller('userProfileController', function($scope, $state, usersService) {

  $scope.showName = true;
  $scope.showContact = true;
  $scope.showNameButtonText = "Hide Name";
  $scope.showContactButtonText = "Hide Contact";

  usersService.getUserById($scope.id).then(function(user) {
    $scope.user = user;
  }, function(error) {
    console.log(error);
  });

  $scope.removeUser = function(user) {
    usersService.removeUser({id:user._id}).then(function() {
      console.log("User successfully deleted!");
      $state.go('search_users');
    }, function(error) {
      console.log(error);
    });
  };

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
});

UserProfileApp.controller('userSearchController', function($scope, usersService) {
  
  usersService.getUsers().then(function(usersList) {
    $scope.users = usersList;
  }, function(error) {
    console.log(error);
  });

  $scope.changeBackground = function() {
    var backgrounds = ["./assets/gifs/aot.gif", "./assets/gifs/catsInBox.gif", "./assets/gifs/minecraft.gif",
                       "./assets/gifs/pikachuNyan.gif", "./assets/gifs/spiral.gif", "./assets/gifs/torus.gif",
                       "./assets/gifs/waves.gif"];
    var randomIndex = Math.floor((Math.random()*backgrounds.length));
    var randomImage = backgrounds[randomIndex];
    var background = "url('" + randomImage + "')"
    document.body.style.background = background
  }
});

UserProfileApp.directive('userCreatorSuite', function() {
	return {
		restrict: 'E',
		templateUrl: './assets/templates/userCreatorSuiteView.html',
		controller: "userCreatorSuiteController"
	}
})
UserProfileApp.directive('userEdit', function() {
	return {
		restrict: 'E',
		templateUrl: './assets/templates/userEditView.html',
		controller: "userEditController"
	}
})
UserProfileApp.directive('userProfile', function() {
	return {
		restrict: 'E',
		templateUrl: './assets/templates/userProfileView.html',
		controller: "userProfileController"
	}
})
UserProfileApp.directive('userSearch', function() {
	return {
		restrict: 'E',
		templateUrl: './assets/templates/userSearchView.html',
		controller: "userSearchController"
	}
})
UserProfileApp.factory('userFactory', function($resource) {
	return $resource(
		'http://localhost:24149/users/:id',
		{id: '@_id'},
		{update: {method: 'PUT'},
		remove: {method: 'DELETE'},
		get: {method: 'GET', isArray: true},
		create: {method: 'POST'}}
	);
});

var UserProfileApp = angular.module('UserProfileApp', ['ui.router', 'ngResource']);
UserProfileApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/'
  })
  .state('create_user', {
    url: '/create_user',
    templateUrl: './assets/partials/userCreatorSuitePartial.html'
  })
  .state('edit', {
    url: '/edit/:id',
    templateUrl: './assets/partials/userEditPartial.html',
    controller: function($scope, $stateParams) {
      $scope.id = $stateParams.id;
    }
  })
  .state('profile', {
    url: '/profile/:id',
    templateUrl: './assets/partials/userProfilePartial.html',
    controller: function($scope, $stateParams) {
      $scope.id = $stateParams.id;
    }
  })
  .state('search_users', {
    url: '/search_users',
    templateUrl: './assets/partials/userSearchPartial.html'
  })
});
UserProfileApp.service('usersService', function($q,userFactory) {
	function getUsers() {
		return userFactory.get().$promise;
	}

	function createUser(user) {
		return userFactory.create(user).$promise;
	}

	function getUserById(id) {
		var deferredUser = $q.defer();
		userFactory.get().$promise.then(function(usersList) {
			angular.forEach(usersList, function(user) {
				if (user._id == id) {
					deferredUser.resolve(user);
				};
			});
		}, function(error) {
			deferredUser.reject(error);
		});
		return deferredUser.promise;
	};

	function updateUser(user) {
		return userFactory.update(user).$promise;
	}

	function removeUser(id) {
		return userFactory.remove(id).$promise;
	}

	return {
		getUsers: getUsers,
		createUser: createUser,
		getUserById: getUserById,
		updateUser: updateUser,
		removeUser: removeUser
	};
});