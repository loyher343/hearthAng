angular.module("hearthApp").service('hearthServ', function($http,$q){

  var api ='https://omgvamp-hearthstone-v1.p.mashape.com/cards?'
  var apiKey = 'mashape-key=B4iLQvZeo4mshGy7lghIQxJleyTRp1MyQqFjsnr0tpCRIXJW0l'
  var hearthurl = '../response.json'

  var deferred = $q.defer();
  $http.get(hearthurl).then(function(data){
    console.log(data.data)
    deferred.resolve(data.data);
  })

  this.getCards = function(){
    
    return deferred.promise

  }

})

