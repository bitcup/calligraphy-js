'use strict';

angular.module('calligraphyApp.kamel', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/kamel', {
            templateUrl: 'views/kamel/kamel.html',
            controller: 'KamelCtrl'
        }).when('/kamel/:tag', {
            templateUrl: 'views/kamel/kamel.html',
            controller: 'KamelCtrl'
        });
    }])

    .controller('KamelCtrl', function ($scope, $routeParams, PageTitle, MetaInfo, CalligraphyAPI) {
        PageTitle.setTitle('Arabic Calligraphy - Kamel El-Baba');
        MetaInfo.setMetaDescription("This is kamel");

        var infoMap = [
            { tag: null, url: "kamel-about.html"}
        ];
        $scope.api = new CalligraphyAPI('KAMEL', $routeParams.tag, 'kamel', infoMap);
    })

;