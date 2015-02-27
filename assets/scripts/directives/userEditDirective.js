UserProfileApp.directive('userEdit', function() {
	return {
		restrict: 'E',
		templateUrl: './assets/templates/userEditView.html',
		controller: "userEditController"
	}
})