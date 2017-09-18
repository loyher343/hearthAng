angular.module('hearthApp', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/')

    $stateProvider
        .state('home',{
            url: '/',
            templateUrl: 'views/home.html',
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
        .state('grandT',{
            url: '/expansions/:id',
            templateUrl: '../views/grand.html',
            controller: 'grandTCtrl' 
        })
        .state('blackRock',{
            url: '/expansions/:id',
            templateUrl: '../views/blackrock.html',
            controller: 'blackRockCtrl'
        })
        .state('fame',{
            url: '/expansions/:iddd',
            templateUrl: '../views/fame.html',
            controller: 'fameCtrl'
        })
        .state('LoE',{
            url: '/expansions/:id',
            templateUrl: '../views/LoE.html',
            controller: 'LoECtrl' 
        })
        .state('oldGods',{
            url: '/expansions/:id',
            templateUrl: '../views/oldGods.html',
            controller: 'oldGodsCtrl' 
        })   
        .state('karazhan',{
            url: '/expansions/:id',
            templateUrl: '../views/karazhan.html',
            controller: 'karazhanCtrl' 
        })
        .state('gadgetzan',{
            url: '/expansions/:id',
            templateUrl: '../views/gadgetzan.html',
            controller: 'gadgetzanCtrl' 
        })
        .state('unGoro',{
            url: '/expansions/:id',
            templateUrl: '../views/unGoro.html',
            controller: 'unGoroCtrl' 
        })
        .state('frozenThrone',{
            url: '/expansions/:id',
            templateUrl: '../views/frozenThrone.html',
            controller: 'frozenThroneCtrl' 
        })                             
        .state('cardInfo',{
            url: '/cardInfo/:id',
            templateUrl: '../views/cardInfo.html',
            controller: 'cardInfoCtrl'
        })
})
