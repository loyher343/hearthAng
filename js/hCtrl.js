angular.module('hearthApp').controller('hCtrl', function($scope, hearthServ){

  
  $scope.test = "tis better to be vile than vile esteem"
  var promise = hearthServ.getExp();
  //    var knights ="Knights of the Frozen Throne"
    promise.then(function(data){
        console.log(data.data["Basic"])
          
    $scope.basic = data.data.Basic
    $scope.classic = data.data.Classic
    $scope.naxx = data.data.Naxxramas
    $scope.fame = data.data["Hall of Fame"]
    $scope.goblin = data.data["Goblins vs Gnomes"]
    $scope.blackRock = data.data["Blackrock Mountain"]
    $scope.grandT = data.data["The Grand Tournament"]
    $scope.LoE = data.data["The League of Explorers"]
    $scope.oldGods = data.data["Whispers of the Old Gods"]
    // $scope. = data.data.
    // $scope. = data.data.
    // $scope. = data.data.
    // $scope. = data.data.

          //console.log($scope.expansion)
    })
     
})