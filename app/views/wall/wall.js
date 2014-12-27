'use strict';

angular.module('calligraphyApp.wall', ['ngRoute', 'infinite-scroll', 'masonry'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/wall', {
            templateUrl: 'views/wall/wall.html',
            controller: 'WallCtrl'
        }).when('/wall/:tag', {
            templateUrl: 'views/wall/wall.html',
            controller: 'WallCtrl'
        });
    }])

    .controller('WallCtrl', function ($scope, $routeParams, PageTitle, MetaInfo, CalligraphyAPI, breadcrumbs) {
        PageTitle.setTitle('Arabic Calligraphy - Wall');
        MetaInfo.setMetaDescription("This is wall");
        $scope.breadcrumbs = breadcrumbs;

        $scope.api = new CalligraphyAPI('WALL', $routeParams.tag);
    })

;