'use strict';

angular.module('myApp.wall', ['ngRoute', 'infinite-scroll', 'masonry'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/wall', {
            templateUrl: 'views/wall/wall.html',
            controller: 'WallCtrl'
        }).when('/wall/:tag', {
            templateUrl: 'views/wall/wall.html',
            controller: 'WallCtrl'
        });
    }])

    .controller('WallCtrl', function ($scope, $routeParams, CalligraphyAPI) {
        $scope.api = new CalligraphyAPI();
        $scope.type = 'WALL';
        $scope.tag = $routeParams.tag;
    })

;