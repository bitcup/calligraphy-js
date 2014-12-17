'use strict';

angular.module('myApp.view3', ['ngRoute', 'infinite-scroll', 'masonry'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view3', {
            templateUrl: 'view3/view3.html',
            controller: 'View3Ctrl'
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
                        this.items.push({'src': lawhat[i].imgSrc, 'title': '"' + lawhat[i].name + '"'});
                    }
                    this.page += 1;
                    this.busy = false;
                }
            }.bind(this));
        };
        return CalligraphyAPI;
    })


    .controller('View3Ctrl', function ($scope, CalligraphyAPI) {
        $scope.api = new CalligraphyAPI();
    })

;