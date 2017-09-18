angular.module('hearthApp').directive('hearthDir', function(){
    return{
        restrict: 'E',         //'E' = element   'A'= atribute
        //template: '<div>Hello World</div>'
        templateUrl: '../views/expans.html',
        // scope: {                //isolate scope from ctrl
        //     us: '=user',
        //     title: '@',
        //     greet: '&'          // functions
        // }
       
    }
})