UserProfileApp.directive('userSearch', function() {
	return {
		restrict: 'E',
		templateUrl: 'partials/userSearchView.html',
		controller: "userSearchController"
	}
})