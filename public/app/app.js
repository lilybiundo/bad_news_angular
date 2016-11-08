'use strict';

angular.module('badNewsApp', ['ngRoute', 'ngResource']);

angular.module('badNewsApp').config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/player', {
            templateUrl: 'views/player.html',
            controller: 'PlayerCtrl'
        })
        .when('/actor', {
            templateUrl: 'views/actor.html',
            controller: 'ActorCtrl'
        });
        //.otherwise({redirectTo: '/player'});


});
