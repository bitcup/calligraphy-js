'use strict';

angular.module('myApp.mokhtar', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/mokhtar', {
            templateUrl: 'views/mokhtar/mokhtar.html',
            controller: 'MokhtarCtrl'
        });
    }])

    .controller('MokhtarCtrl', function ($scope) {
    })

;