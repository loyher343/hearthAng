angular.module('hearthApp').directive('navDir', function(){
    return{
        restrict: 'E',         //'E' = element   'A'= atribute
        //template: '<div>Hello World</div>'
        templateUrl: '../views/navDir.html',
        // scope: {                //isolate scope from ctrl
        //     us: '=user',
        //     title: '@',
        //     greet: '&'          // functions
        // }
       
    }
})