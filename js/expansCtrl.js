angular.module('hearthApp').controller('expansCtrl', function($scope, hearthServ){
    $scope.test = "tis better to be vile than vile esteem"
 
//  console.log($scope.cards)
    var promise = hearthServ.getCards();
   var knights ="Knights of the Frozen Throne"
   promise.then(function(data){
       $scope.expansion = data.data.Classic;
      
          
           console.log(data.data)
       
   }) 
  
})



var expansions = [
    "Basic",
    "Blackrock Mountain",
    "Classic",
    "Goblins vs Gnomes",
    "Hall of Fame",
    "Hero Skins",
    "Journey to Un'Goro",
    "Knights of the Frozen Throne",
    "Mean Streets of Gadgtzan",
    "Naxxramas",
    "One Night in Karazhan",
    "The Grand Tournament",
    "The League of Explorers",
    "Whispers of the Old Gods"
]