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
            url: '/expansions/:iddd',
            templateUrl: '../views/fame.html',
            controller: 'fameCtrl'
        })
        .state('naxx',{
            url: '/expansions/:id',
            templateUrl: '../views/naxx.html',
            controller: 'naxxCtrl'
        })
        .state('goblin',{
            url: '/expansions/:id',
            templateUrl: '../views/goblins.html',
            controller: 'goblinCtrl'
        })
        .state('blackRock',{
            url: '/expansions/:id',
            templateUrl: '../views/blackrock.html',
            controller: 'blackRockCtrl'
        })
        .state('grandT',{
            url: '/expansions/:id',
            templateUrl: '../views/grand.html',
            controller: 'grandTCtrl' 
        })       
        .state('cardInfo',{
            url: '/cardInfo/:id',
            templateUrl: '../views/cardInfo.html',
            controller: 'cardInfoCtrl'
        })
})
