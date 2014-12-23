'use strict';

angular.module('myApp.wall', ['ngRoute', 'infinite-scroll', 'masonry'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/wall', {
            templateUrl: 'views/wall/wall.html',
            controller: 'WallCtrl'
        });
    }])

    .controller('WallCtrl', function ($scope, CalligraphyAPI) {
        $scope.api = new CalligraphyAPI();
    })

;