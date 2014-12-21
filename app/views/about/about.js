'use strict';

angular.module('myApp.what', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/about', {
            templateUrl: 'views/about/about.html',
            controller: 'AboutCtrl'
        });
    }])

    .controller('AboutCtrl', function ($scope) {
    })

;