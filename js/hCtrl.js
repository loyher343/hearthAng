angular.module('hearthApp').controller('hCtrl', function($scope, hearthServ){
    //$scope.test = "Yo"
    var promise = hearthServ.getCards();
   
    promise.then(function(data){
        $scope.cards = data.data.Basic;
       
           
            console.log($scope.cards)
        
    }) 
   
})