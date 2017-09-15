angular.module('hearthApp').controller('karazhanCtrl', function($scope, hearthServ){
    $scope.test = "tis better to be vile than vile esteem"


    


    var promise = hearthServ.getCards();

   promise.then(function(data){
        
    
    
        $scope.expansion = data.data["One Night in Karazhan"]
       
    
        
    
  
  
       
   }) 
  
})
