angular.module('hearthApp').controller('basicCtrl', function($scope, hearthServ){
    $scope.test = "tis better to be vile than vile esteem"


    


    var promise = hearthServ.getCards();

   promise.then(function(data){
       console.log(data)
    
    
        $scope.expansion = data.data.Basic
        console.log($scope.expansions)
          
       
   }) 
  
})


