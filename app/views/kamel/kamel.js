'use strict';

angular.module('calligraphyApp.kamel', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/kamel', {
            templateUrl: 'views/kamel/kamel.html',
            controller: 'KamelCtrl'
        });
    }])

    .controller('KamelCtrl', function ($scope, PageTitle, MetaInfo) {
        PageTitle.setTitle('Arabic Calligraphy - Kamel El-Baba');
        MetaInfo.setMetaDescription("This is kamel");

    })

;