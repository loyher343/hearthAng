angular.module('hearthApp', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/')

    $stateProvider
        .state('home',{
            url: '/',
            templateUrl: '../views/home.html',
            controller: 'hCtrl'
        })
        .state('basic',{
            url: '/expansions/:id',
            templateUrl: '../views/basic.html',
            controller: 'basicCtrl'
        })    
        .state('classic',{
            url: '/expansions/:id',
            templateUrl: '../views/classic.html',
            controller: 'classicCtrl'
        })    
        .state('fame',{
            url: '/expansions/:id',
            templateUrl: '../views/fame.html',
            controller: 'fameCtrl'
        })
        .state('cardInfo',{
            url: '/cardInfo/:id',
            templateUrl: '../views/cardInfo.html',
            controller: 'cardInfoCtrl'
        })
})
