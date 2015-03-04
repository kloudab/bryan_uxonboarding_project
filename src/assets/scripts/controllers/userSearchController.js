UserProfileApp.controller('userSearchController', function($scope, usersService) {
  
  usersService.getUsers().then(function(usersList) {
    $scope.users = usersList;
  }, function(error) {
    console.log(error);
  });

  $scope.changeBackground = function() {
    var backgrounds = ["./gifs/aot.gif", "./gifs/catsInBox.gif", "./gifs/minecraft.gif",
                       "./gifs/pikachuNyan.gif", "./gifs/spiral.gif", "./gifs/torus.gif",
                       "./gifs/waves.gif"];
    var randomIndex = Math.floor((Math.random()*backgrounds.length));
    var randomImage = backgrounds[randomIndex];
    var background = "url('" + randomImage + "')"
    document.body.style.background = background
  }
});
