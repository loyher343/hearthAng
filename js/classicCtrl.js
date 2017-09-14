angular.module('hearthApp').controller('classicCtrl', function($scope, hearthServ){
    $scope.test = "tis better to be vile than vile esteem"


    
//  console.log($scope.cards)

    var promise = hearthServ.getCards();
//    var knights ="Knights of the Frozen Throne"
   promise.then(function(data){
        console.log(data)
    
    
        $scope.expansion = data.data.Classic
        console.log($scope.expansion)
      //for(var i = oldGods.length; i >= 0; i--){
        
    //   for(var i = 0 ; i < oldGods.length ; i++){
      
        
    //     // console.log(typeof(oldGods[i].img))
    //     //  if(oldGods[i].type === "Enchantment"){
    //     //      oldGods.splice(i,1)
           
    //     // }
    //     // if(oldGods[i].cost == undefined){
    //     //      oldGods.splice(i,1)
    //     //}
    //     if(oldGods[i].artist == undefined){
    //         oldGods.splice(i,1)
    //     }
    //     // // if(oldGods[i].img == undefined){
    //     // //     oldGods.splice(i,1)
    //     // // }
    //     // if(oldGods[i].imgGold == undefined){
    //     //     oldGods.splice(i,1)
    //     // }
    //   }
        
    
    console.log($scope.expansion)
    //   delete $scope.expansion.Debug
    //   delete $scope.expansion.Credits
    //   delete $scope.expansion.Missions
    //   delete $scope.expansion.Promo
    //   delete $scope.expansion.System
        
          
       
   }) 
  
})
