UserProfileApp.directive('userEdit', function(userEditController) {
	return {
		restrict: 'E',
		templateUrl: './assets/templates/userEditView.html',
		controller: userEditController
	}
})