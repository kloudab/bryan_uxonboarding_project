UserProfileApp.controller('userSearchController', function($scope, $location, usersService) {
  
  usersService.getUsers().then(function(usersList) {
    $scope.users = usersList;
  }, function(error) {
    console.log(error);
  });

  $scope.changeBackground = function() {
    var backgrounds = ["./assets/gifs/aot.gif", "./assets/gifs/catsInBox.gif", "./assets/gifs/minecraft.gif",
                       "./assets/gifs/pikachuNyan.gif", "./assets/gifs/spiral.gif", "./assets/gifs/torus.gif",
                       "./assets/gifs/waves.gif"];
    var randomIndex = Math.floor((Math.random()*backgrounds.length));
    var randomImage = backgrounds[randomIndex];
    var url = "url('" + randomImage + "')"
    var property = url + " 1000%";
    document.body.style.background = property
    // var element = document.getElementById('main')
    // element.style.backgroundImage = url;
    // element.style.backgroundSize = '10%';
  }

  $scope.showFirstNames = true;
  $scope.showLastNames = true;
  $scope.showPhoneNumbers = true;
  $scope.showEmails = true;

  $scope.toggleShowFirstNames = function() {
    $scope.showFirstNames = !$scope.showFirstNames
  }
  $scope.toggleShowLastNames = function() {
    $scope.showLastNames = !$scope.showLastNames
  }
  $scope.toggleShowPhoneNumbers = function() {
    $scope.showPhoneNumbers = !$scope.showPhoneNumbers
  }
  $scope.toggleShowEmails = function() {
    $scope.showEmails = !$scope.showEmails
  }

});
