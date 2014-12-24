'use strict';

angular.module('calligraphyApp', [
    'ngRoute',
    'calligraphyApp.home',
    'calligraphyApp.mokhtar',
    'calligraphyApp.kamel',
    'calligraphyApp.wall',
    'calligraphyApp.what',
    'calligraphyServices',
    'calligraphyDirectives'
]).
    config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.otherwise({redirectTo: '/home'});
        //$locationProvider.html5Mode(true);
    }])

    .controller('MainCtrl', function ($scope, $location, PageTitle, MetaInfo) {
        // collapse fluid nav
        $scope.updateCollapsed = function() {
            $scope.navCollapsed=true;
        };
        // active menu
        $scope.isActive = function (viewLocation) {
            return (viewLocation === $location.path());
        };

        $scope.pageTitle = PageTitle;
        $scope.metaInfo = MetaInfo;
    })

;
