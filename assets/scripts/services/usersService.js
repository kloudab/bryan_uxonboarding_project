UserProfileApp.service('usersService', function($q,userIdFactory,usersFactory) {
	function getUsers() {
		return usersFactory.get().$promise;
	}

	function createUser(user) {
		return usersFactory.create(user).$promise;
	}

	function getUserById(id) {
		var deferredUser = $q.defer();
		usersFactory.get().$promise.then(function(usersList) {
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
		return userIdFactory.update(user).$promise;
	}

	function removeUser(id) {
		return userIdFactory.remove(id).$promise;
	}

	return {
		getUsers: getUsers,
		createUser: createUser,
		getUserById: getUserById,
		updateUser: updateUser,
		removeUser: removeUser
	};
});