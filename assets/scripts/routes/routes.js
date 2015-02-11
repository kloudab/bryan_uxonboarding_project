UserProfileApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
    })
    .state('profile_view', {
      url: '/profile_view/:id',
      templateUrl: './assets/templates/userProfileView.html',
      controller: function($scope, $stateParams) {
        $scope.id = $stateParams.id;
      }
    })
    .state('edit', {
      url: '/edit/:id',
      templateUrl: './assets/templates/userEditingProfileView.html',
      controller: function($scope, $stateParams) {
        $scope.id = $stateParams.id;
      }
    })
    .state('search_users', {
      url: '/search_users',
      templateUrl: './assets/templates/userSearchView.html',
    })
    .state('create_user', {
      url: '/create_user',
      templateUrl: './assets/templates/userCreateProfileView.html',
    });
});