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

    .controller('WallCtrl', function ($scope, $routeParams, $log, PageTitle, MetaInfo, CalligraphyAPI) {
        PageTitle.setTitle('Arabic Calligraphy - Wall');
        MetaInfo.setMetaDescription("This is wall");

        var infoMap = [
            { tag: null, url: "wall-about.html"},
            { tag: "traditional", url: "wall-traditional.html"},
            { tag: "modern", url: "wall-modern.html"},
            { tag: "abstract", url: "wall-abstract.html"},
            { tag: "thuluth", url: "wall-thuluth.html"},
            { tag: "kufi", url: "wall-kufi.html"},
            { tag: "naskh", url: "wall-naskh.html"},
            { tag: "diwani", url: "wall-diwani.html"},
            { tag: "farsi", url: "wall-farsi.html"}
        ];
        $scope.api = new CalligraphyAPI('WALL', $routeParams.tag, 'wall', infoMap);
    })

;