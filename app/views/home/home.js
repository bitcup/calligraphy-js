'use strict';

angular.module('calligraphyApp.home', ['ngRoute', 'infinite-scroll', 'masonry'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'views/home/home.html',
            controller: 'HomeCtrl'
        }).when('/home/:tag', {
            templateUrl: 'views/home/home.html',
            controller: 'HomeCtrl'
        });
    }])

    .controller('HomeCtrl', function ($scope, $routeParams, PageTitle, MetaInfo, CalligraphyAPI) {
        PageTitle.setTitle('Arabic Calligraphy - Home');
        MetaInfo.setMetaDescription("This is home");

        $scope.api = new CalligraphyAPI('WALL', $routeParams.tag, 'home');
    })

;