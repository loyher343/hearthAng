angular.module('hearthApp').controller('classicCtrl', function($scope, hearthServ){
    $scope.test = "tis better to be vile than vile esteem"


    


    var promise = hearthServ.getCards();

   promise.then(function(data){
        
    
    
        $scope.expansion = data.data.Classic
       
    
        
    
  
  
       
   }) 
  
})
