angular.module('hearthApp').controller('expansCtrl', function($scope, hearthServ){
    $scope.test = "tis better to be vile than vile esteem"
 
//  console.log($scope.cards)
    var promise = hearthServ.getCards();
   var knights ="Knights of the Frozen Throne"
   promise.then(function(data){
       $scope.cards = data.data[knights];
      
          
           console.log($scope.cards)
       
   }) 
  
})