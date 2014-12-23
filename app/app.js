'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.home',
    'myApp.mokhtar',
    'myApp.kamel',
    'myApp.wall',
    'myApp.what'
]).
    config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.otherwise({redirectTo: '/home'});
        //$locationProvider.html5Mode(true);
    }])

    .factory('CalligraphyAPI', function ($http) {
        var CalligraphyAPI = function () {
            this.items = [];
            this.busy = false;
            this.done = false;
            this.page = 0;
        };
        CalligraphyAPI.prototype.nextPage = function (type, tag) {
            if (this.busy) return;
            console.log('next page = ' + this.page);
            this.busy = true;
            var url = "http://localhost:8080/api/v1.0/lawhats/type/" + type;
            if (tag) {
                url += "/tag/" + tag;
            }
            url += "?page=" + this.page + "&size=10&sort=dateAdded,desc";
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

    .controller('HeaderCtrl', function ($scope, $location) {
        $scope.updateCollapsed = function() {
            //console.log($location.path());
            $scope.navCollapsed=true;
        };
        $scope.isActive = function (viewLocation) {
            return (viewLocation === $location.path());
        };
    })

    // taken from angular-ui-bootstrap collapse directive (minus transition)
    .directive('collapse', [function ($transition) {

        return {
            link: function (scope, element, attrs) {

                var initialAnimSkip = true;
                var currentTransition;

                function expand() {
                    if (initialAnimSkip) {
                        initialAnimSkip = false;
                        expandDone();
                    } else {
                        element.removeClass('collapse').addClass('collapsing');
                    }
                }

                function expandDone() {
                    element.removeClass('collapsing');
                    element.addClass('collapse in');
                    element.css({height: 'auto'});
                }

                function collapse() {
                    if (initialAnimSkip) {
                        initialAnimSkip = false;
                        collapseDone();
                        element.css({height: 0});
                    } else {
                        // CSS transitions don't work with height: auto, so we have to manually change the height to a specific value
                        element.css({ height: element[0].scrollHeight + 'px' });
                        //trigger reflow so a browser realizes that height was updated from auto to a specific value
                        var x = element[0].offsetWidth;
                        element.removeClass('collapse in').addClass('collapsing');
                    }
                }

                function collapseDone() {
                    element.removeClass('collapsing');
                    element.addClass('collapse');
                }

                scope.$watch(attrs.collapse, function (shouldCollapse) {
                    if (shouldCollapse) {
                        collapse();
                    } else {
                        expand();
                    }
                });
            }
        };
    }])

;
