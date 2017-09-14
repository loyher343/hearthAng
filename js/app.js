angular.module('hearthApp', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider){
   // $urlRouterProvider.otherwise('/')

    $stateProvider
        .state('home',{
            url: '/',
            templateUrl: '../views/home.html',
            controller: 'hCtrl'
        })
        .state('expans',{
            url: '/expansions',
            templateUrl: '../views/expans.html',
            controller: 'expansCtrl'
        })
        .state('cardInfo',{
            url: '/cardInfo:id',
            templateUrl: '../views/cardInfo.html'
        })
})
