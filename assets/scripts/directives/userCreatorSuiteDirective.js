UserProfileApp.directive('userCreatorSuiteDirective', function(userCreatorSuiteController) {
	return {
		restrict: 'E',
		template: './assets/scripts/templates/userCreatorSuiteView.html',
		controller: userCreatorSuiteController
	}
}