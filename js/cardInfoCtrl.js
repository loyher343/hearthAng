angular
.module("hearthApp")
.controller("cardInfoCtrl", function($scope, $stateParams, hearthServ) {
    $scope.test = "tis better to be vile than vile esteem"
    $scope.card= hearthServ.cardInfo()
    console.log($scope.card)
});