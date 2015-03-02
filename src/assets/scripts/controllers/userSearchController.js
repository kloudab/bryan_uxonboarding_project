UserProfileApp.controller('userSearchController', function($scope, usersService) {
  
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
    var background = "url('" + randomImage + "')"
    document.body.style.background = background
  }
});
