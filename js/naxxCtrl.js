angular.module('hearthApp').controller('naxxCtrl', function($scope, hearthServ){
    $scope.test = "tis better to be vile than vile esteem"


    


    var promise = hearthServ.getCards();

   promise.then(function(data){
        
    
    
        $scope.naxx = data.data.Naxxramas
       
    
        
    
  
  
       
   }) 
  
})
