﻿var app = angular.module('myApp', ['ngRoute', 'ngResource']);
app
.config(['$routeProvider',
    function ($routeProvider) {
    $routeProvider
    .when('/start', {
        templateUrl: './home/main',
        controller: 'MainController'
    })
    .otherwise({redirectTo: '/start'});
    }])
.controller('RootController', ['$scope', '$route', '$routeParams', '$location',
    function ($scope, $route, $routeParams, $location) {

    }
]);