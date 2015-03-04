UserProfileApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/'
  })
  .state('create_user', {
    url: '/create_user',
    templateUrl: 'partials/userCreatorSuitePartial.html'
  })
  .state('edit', {
    url: '/edit/:id',
    templateUrl: 'partials/userEditPartial.html',
    controller: function($scope, $stateParams) {
      $scope.id = $stateParams.id;
    }
  })
  .state('profile', {
    url: '/profile/:id',
    templateUrl: 'partials/userProfilePartial.html',
    controller: function($scope, $stateParams) {
      $scope.id = $stateParams.id;
    }
  })
  .state('search_users', {
    url: '/search_users',
    templateUrl: 'partials/userSearchPartial.html'
  })
});