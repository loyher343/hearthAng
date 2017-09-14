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
            templateUrl: '../views/expans.html',
            controller: 'basicCtrl'
        })    
        .state('classic',{
            url: '/expansions/:id',
            templateUrl: '../views/classic.html',
            controller: 'classicCtrl'
        })    
        // .state('expans',{
        //     url: '/expansions/:id',
        //     templateUrl: '../views/expans.html',
        //     controller: 'expansCtrl'
        // })
        .state('cardInfo',{
            url: '/cardInfo/:id',
            templateUrl: '../views/cardInfo.html',
            controller: 'cardInfoCtrl'
        })
})
