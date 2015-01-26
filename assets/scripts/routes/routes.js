UserProfileApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
    })
    .state('profile_view', {
      url: '/profile_view',
      templateUrl: './assets/templates/userProfileView.html',
      controller: 'userProfileViewController'
    })
    .state('edit', {
      url: '/edit',
      templateUrl: './assets/templates/userEditingProfileView.html',
      controller: 'userController'
    })
    .state('search_users', {
      url: '/search_users',
      templateUrl: './assets/templates/usersListingView.html',
      contorller: 'usersController'
    })
    .state('create_user', {
      url: '/create_user',
      templateUrl: './assets/templates/userCreateProfileView.html',
      controller: 'userController'
    });
});