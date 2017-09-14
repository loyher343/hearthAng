angular.module("hearthApp").service('cardbackSrv', function($http,$q){
    var cardback = "../cardbacks.json"
    var deferred2 = $q.defer();
    $http.get(cardback).then(function(data2){
        deferred2.resolve(data2);
    })

    this.getCardbacks= function(){
        console.log(deferred2.promise)
        return deferred2.promise
    }
})