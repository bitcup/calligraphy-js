'use strict';

angular.module('myApp.kamel', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/kamel', {
            templateUrl: 'views/kamel/kamel.html',
            controller: 'KamelCtrl'
        });
    }])

    .controller('KamelCtrl', function ($scope) {
    })

;