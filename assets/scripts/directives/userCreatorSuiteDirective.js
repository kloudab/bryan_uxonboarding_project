UserProfileApp.directive('userCreatorSuite', function(userCreatorSuiteController) {
	return {
		restrict: 'E',
		templateUrl: './assets/templates/userCreatorSuiteView.html',
		controller: userCreatorSuiteController
	}
})