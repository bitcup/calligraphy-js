'use strict';

angular.module('myApp.mokhtar', ['ngRoute', 'infinite-scroll', 'masonry'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/mokhtar', {
            templateUrl: 'views/mokhtar/mokhtar.html',
            controller: 'MokhtarCtrl'
        });
    }])

    .controller('MokhtarCtrl', function ($scope, CalligraphyAPI) {
        $scope.api = new CalligraphyAPI();
    })

;