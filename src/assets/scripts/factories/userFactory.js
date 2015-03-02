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
