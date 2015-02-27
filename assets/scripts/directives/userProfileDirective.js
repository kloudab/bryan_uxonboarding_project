UserProfileApp.directive('userProfileDirective', function(userProfileController) {
	return {
		restrict: 'E',
		template: './assets/scripts/templates/userProfileView.html',
		controller: userProfileController
	}
}