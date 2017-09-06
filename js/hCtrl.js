angular.module('hearthApp').controller('hCtrl', function($scope, hearthServ){
    //$scope.test = "Yo"
    $scope.hearth = hearthServ.getCards(); 
})