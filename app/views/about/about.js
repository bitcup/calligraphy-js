'use strict';

angular.module('calligraphyApp.what', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/about', {
            templateUrl: 'views/about/about.html',
            controller: 'AboutCtrl'
        });
    }])

    .controller('AboutCtrl', function ($scope, PageTitle, MetaInfo) {
        PageTitle.setTitle('Arabic Calligraphy - About');
        MetaInfo.setMetaDescription("This is about");

    })

;