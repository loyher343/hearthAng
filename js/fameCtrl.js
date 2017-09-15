angular.module('hearthApp').controller('fameCtrl', function($scope, hearthServ){
    $scope.test = "tis better to be vile than vile esteem"


    


    var promise = hearthServ.getCards();

   promise.then(function(data){
    
    
    var fame = "Hall of Fame"
        $scope.expansion = data.data["Hall of Fame"]
        
    console.log($scope.expansion)
    
    
   
          
       
   }) 
  
})





