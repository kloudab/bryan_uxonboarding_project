UserProfileApp.directive('userEdit', function() {
	return {
		restrict: 'E',
		templateUrl: 'partials/userEditView.html',
		controller: "userEditController"
	}
})