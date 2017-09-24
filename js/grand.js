angular.module('hearthApp').controller('grandTCtrl', function($scope, hearthServ){
    $scope.test = "tis better to be vile than vile esteem"


    


    var promise = hearthServ.getCards();

   promise.then(function(data){
       var grand = data.data["The Grand Tournament"]
       console.log(grand)
       for(var i = 0; i<grand.length; i++){
           
            if(grand[i].cost===undefined){
                set.splice(i,1)
                i = i-1
            }
           
    
        }console.log(grand)
        $scope.expansion = grand
       
    
        
    
  
  
       
   }) 
  
})
