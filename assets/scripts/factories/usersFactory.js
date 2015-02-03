UserProfileApp.factory('usersFactory', function($resource) {
  return $resource(
    'http://localhost:24149/users',
    null,
    {get: {method: 'GET', isArray: true}
    save: {method: 'POST'}}
  );
});
