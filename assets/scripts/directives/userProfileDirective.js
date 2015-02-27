UserProfileApp.directive('userProfile', function(userProfileController) {
	return {
		restrict: 'E',
		templateUrl: './assets/templates/userProfileView.html',
		controller: userProfileController
	}
})