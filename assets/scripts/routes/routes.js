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
    })
    .state('search_users', {
      url: '/search_users',
      templateUrl: './assets/templates/usersSearchView.html',
    })
    .state('create_user', {
      url: '/create_user',
      templateUrl: './assets/templates/userCreateProfileView.html',
    });
});