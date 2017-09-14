angular.module('hearthApp').controller('hCtrl', function($scope, hearthServ, cardbackSrv){
  $scope.test = "tis better to be vile than vile esteem"
  var promise = hearthServ.getExp();
  //    var knights ="Knights of the Frozen Throne"
    promise.then(function(data){
          
    
    $scope.basic= data.data.Basic
          //console.log($scope.expansion)
    })
     var promise2 = cardbackSrv.getCardbacks();
     promise2.then(function(data2){
       $scope.cardbacks= data2.data
       console.log($scope.cardbacks)
     })
})