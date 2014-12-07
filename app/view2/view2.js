'use strict';

angular.module('myApp.view2', ['ngRoute', 'masonry'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl'
        });
    }])

    .controller('View2Ctrl', function ($scope) {
        function genBrick() {
            var width = ~~(Math.random() * 300) + 100;
            var height = ~~(Math.random() * 300) + 200;
            return {
                src: 'http://placehold.it/' + 350 + 'x' + height
            };
        }
        $scope.bricks = [
            genBrick(),
            genBrick(),
            genBrick(),
            genBrick(),
            genBrick()
        ];
        $scope.add = function add() {
            $scope.bricks.push(genBrick());
        };
        $scope.remove = function remove() {
            $scope.bricks.splice(
                ~~(Math.random() * $scope.bricks.length),
                1
            )
        };
    });