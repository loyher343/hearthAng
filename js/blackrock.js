angular.module('hearthApp').controller('blackRockCtrl', function($scope, hearthServ){
    $scope.test = "tis better to be vile than vile esteem"


    


    var promise = hearthServ.getCards();

   promise.then(function(data){
        
    
    
        $scope.expansion = data.data["Blackrock Mountain"]
       
    
        
    
  
  
       
   }) 
  
})
