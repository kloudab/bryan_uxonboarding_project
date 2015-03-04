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