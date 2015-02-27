UserProfileApp.directive('userEditDirective', function(userEditController) {
	return {
		restrict: 'E',
		template: './assets/scripts/templates/userEditView.html',
		controller: userEditController
	}
}