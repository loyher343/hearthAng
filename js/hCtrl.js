angular.module('hearthApp').controller('hCtrl', function($scope, hearthServ){
  $scope.test = "tis better to be vile than vile esteem"
  var promise = hearthServ.getExp();
  //    var knights ="Knights of the Frozen Throne"
    promise.then(function(data){
          
    
    $scope.basic = data.data.Basic
    $scope.classic = data.data.Classic
    $scope.naxxramas = data.data.Naxxramas
    // $scope. = data.data.
    // $scope. = data.data.
    // $scope. = data.data.
    // $scope. = data.data.
    // $scope. = data.data.

          //console.log($scope.expansion)
    })
     
})