'use strict';

angular.module('calligraphyApp', [
    'ngRoute',
    'calligraphyApp.home',
    'calligraphyApp.wall',
    'calligraphyApp.mokhtar',
    'calligraphyApp.kamel',
    'calligraphyApp.what',
    'calligraphyServices',
    'calligraphyDirectives',
    'seo'
])
    .constant("myConfig", {
        "apiUrl": "http://localhost:8080"
    })

    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.otherwise({redirectTo: '/home'});
        $locationProvider.html5Mode(false);
    }])

    .controller('MainCtrl', function ($scope, $location, PageTitle, MetaInfo) {
        // collapse fluid nav
        $scope.updateCollapsed = function () {
            $scope.navCollapsed = true;
        };
        // active menu
        $scope.isActive = function (viewLocation) {
            return ($location.path().indexOf(viewLocation) > -1);
        };

        $scope.pageTitle = PageTitle;
        $scope.metaInfo = MetaInfo;
    })

;
