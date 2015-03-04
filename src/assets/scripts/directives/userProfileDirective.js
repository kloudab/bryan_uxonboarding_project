UserProfileApp.directive('userProfile', function() {
	return {
		restrict: 'E',
		templateUrl: 'partials/userProfileView.html',
		controller: "userProfileController"
	}
})