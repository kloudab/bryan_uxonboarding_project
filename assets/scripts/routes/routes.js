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