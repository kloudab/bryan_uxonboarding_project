UserProfileApp.directive('usersSearchDirective', function(userSearchController) {
	return {
		restrict: 'E',
		template: './assets/scripts/templates/userSearchView.html',
		controller: userSearchController
	}
}