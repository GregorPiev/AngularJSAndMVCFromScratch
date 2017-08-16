var app = angular.module('myApp');
var mainController = function ($scope) {
    $scope.name = "Hello Gregory Pievski: mudozvon dagul";
};

app.controller('MainController', ['$scope', mainController]);