angular.module("hearthApp").service('hearthServ', function($http,$q){
  var hearthurl = '../response.json'

  var deferred = $q.defer();
  $http.get(hearthurl).then(function(data){
    deferred.resolve(data);
  })

  this.getCards = function(){
    return deferred.promise
  }

})

//https://omgvamp-hearthstone-v1.p.mashape.com/cards?mashape-key=B4iLQvZeo4mshGy7lghIQxJleyTRp1MyQqFjsnr0tpCRIXJW0l