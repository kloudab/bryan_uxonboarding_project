UserProfileApp.directive('userSearch', function() {
	return {
		restrict: 'E',
		templateUrl: './assets/templates/userSearchView.html',
		controller: "userSearchController"
	}
})