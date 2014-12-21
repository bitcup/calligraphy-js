'use strict';

angular.module('myApp.wall', ['ngRoute', 'infinite-scroll', 'masonry'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/wall', {
            templateUrl: 'views/wall/wall.html',
            controller: 'WallCtrl'
        });
    }])

    .factory('CalligraphyAPI', function ($http) {
        var CalligraphyAPI = function () {
            this.items = [];
            this.busy = false;
            this.done = false;
            this.page = 0;
        };
        CalligraphyAPI.prototype.nextPage = function () {
            if (this.busy) return;
            console.log('next page = ' + this.page);
            this.busy = true;
            //var url = "http://localhost:8080/api/v1.0/lawhats?page=" + this.page + "&size=20&sort=dateAdded,desc&jsonp=JSON_CALLBACK";
            var url = "http://localhost:8080/api/v1.0/lawhats?page=" + this.page + "&size=10&sort=dateAdded,desc";
            $http.get(url).success(function (data) {
                var lawhat = data.content;
                if (lawhat.length == 0) {
                    this.done = true;
                } else {
                    for (var i = 0; i < lawhat.length; i++) {
                        this.items.push(lawhat[i]);
                    }
                    this.page += 1;
                    this.busy = false;
                }
            }.bind(this));
        };
        return CalligraphyAPI;
    })


    .controller('WallCtrl', function ($scope, CalligraphyAPI) {
        $scope.api = new CalligraphyAPI();
    })

;