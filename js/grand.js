angular.module('hearthApp').controller('grandTCtrl', function($scope, hearthServ){
    $scope.test = "tis better to be vile than vile esteem"


    


    var promise = hearthServ.getCards();

   promise.then(function(data){
       var grand = data.data["The Grand Tournament"]
       console.log(grand)
       for(var i = 0; i<grand.length; i++){
            if(grand[i].imgGold===undefined){
                grand.splice(i,1)
            }
            if(grand[i].img== undefined){
                grand.splice(i,1)
            }
            if(grand[i].Enchantment!=undefined){
                grand.splice(i,1)
            }
            if(grand[i].cost===undefined){
                grand.splice(i,1)
            }
           
    
        }console.log(grand)
        $scope.expansion = grand
       
    
        
    
  
  
       
   }) 
  
})
