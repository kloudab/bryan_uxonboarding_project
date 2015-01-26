UserProfileApp.factory('userIdFactory', function($resource) {
  return $resource(
    'http://localhost:24149/users/:id',
    null,
    {update: {method: 'PUT'}
    remove: {method: 'DELETE'}}
  );
});
