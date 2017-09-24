angular.module('hearthApp').controller('oldGodsCtrl', function($scope, hearthServ){
    $scope.test = "tis better to be vile than vile esteem"


    


    var promise = hearthServ.getCards();

   promise.then(function(data){
    var set = data.data["Whispers of the Old Gods"]
    console.log(set)
    for(var i = 0; i<set.length; i++){
        
         if(set[i].cost===undefined){
            set.splice(i,1)
            i = i-1
         }
        
 
     }console.log(set)
     $scope.expansion = set
    })
  
})
