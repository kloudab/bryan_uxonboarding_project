UserProfileApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
    })
    .state('profile_view', {
      url: '/profile_view',
      templateUrl: './assets/templates/userProfileView.html',
      controller: 'UserProfileController'
    })
    .state('edit', {
      url: '/edit',
      templateUrl: './assets/templates/userEditingProfileView.html'
    })
    .state('search_users', {
      url: '/search_users',
      templateUrl: './assets/templates/usersListingView.html'
    });
});