UserProfileApp.directive('usersSearch', function(userSearchController) {
	return {
		restrict: 'E',
		templateUrl: './assets/templates/userSearchView.html',
		controller: userSearchController
	}
})