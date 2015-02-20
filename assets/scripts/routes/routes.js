UserProfileApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/',
  })
  .state('profile', {
    url: '/profile/:id',
    templateUrl: './assets/templates/userProfileView.html',
    controller: function($scope, $stateParams) {
      $scope.id = $stateParams.id;
    },
    resolve: {id: ['$stateParams', function($stateParams){
        return $stateParams.id
      }]
    }
  })
  .state('profile.edit', {
    url: '/edit/',
    templateUrl: './assets/templates/userEditingProfileView.html',
    controller: function($scope, $stateParams, id) {
      $scope.id = id;
      // console.log($stateParams.id);
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