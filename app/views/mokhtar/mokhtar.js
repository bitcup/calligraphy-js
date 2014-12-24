'use strict';

angular.module('calligraphyApp.mokhtar', ['ngRoute', 'infinite-scroll', 'masonry'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/mokhtar', {
            templateUrl: 'views/mokhtar/mokhtar.html',
            controller: 'MokhtarCtrl'
        });
    }])

    .controller('MokhtarCtrl', function ($scope, PageTitle, MetaInfo, CalligraphyAPI) {
        PageTitle.setTitle('Arabic Calligraphy - Mokhtar El-Baba');
        MetaInfo.setMetaDescription("This is mokhtar");
        $scope.api = new CalligraphyAPI();
    })

;