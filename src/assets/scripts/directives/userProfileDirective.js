UserProfileApp.directive('userProfile', function() {
	return {
		restrict: 'E',
		templateUrl: './assets/templates/userProfileView.html',
		controller: "userProfileController"
	}
})