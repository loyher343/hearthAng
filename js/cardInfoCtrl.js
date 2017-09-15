angular
.module("hearthApp")
.controller("cardInfoCtrl", function($scope, $stateParams, hearthServ) {
    $scope.test = "tis better to be vile than vile esteem"
    //console.log($stateParams.id)
   
    var stateID = $stateParams.id
    $scope.card = function(id){
       
        hearthServ.cardInfo(id).then(function(response){
            var stuff = response.data
           // console.log(response)
            for(var key in stuff){
                
                for(var i = 0; i<stuff[key].length;i++){
                    
                    if(stuff[key][i].cardId===stateID){
                        console.log("HEY")
                        console.log(stuff[key][i])
                        
                         return $scope.thiscard = stuff[key][i]
                          
                    
                    }
                }
            }
            return;
        })
       
        return
    }
$scope.card($stateParams.id)

  















    // $scope.card =function(id){ hearthServ.cardInfo(id)
    // .then(function(response){
    //  console.log(response)
    //  //console.log(response.data.Basic)
    //     for (var key in response.data) {
    //         console.log(key)
    //         for (var c in key){  // {Basic : array},{Classic : array}...
    //           // console.log(c[0])
    //            for(var index = 0; index < c.length; index++){
    //               // console.log(c[index])
    //                 if($stateParams.id == c[index].cardId){
    //                     var card = c
    //                     console.log("HEY")
    //                     return card
    //                 }
    //             }       
    //         }
    //     }
    // })
    // console.log($scope.card,"EH")}
});