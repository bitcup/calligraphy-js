'use strict';

angular.module('calligraphyServices', [])

    .factory('PageTitle', function () {
        var title = 'Arabic Calligraphy';
        return  {
            title: function () {
                return title;
            },
            setTitle: function (newTitle) {
                title = newTitle;
            }
        };
    })

    .factory('MetaInfo', function () {
        var metaDescription = '';
        var metaKeywords = '';
        return {
            metaDescription: function () {
                return metaDescription;
            },
            metaKeywords: function () {
                return metaKeywords;
            },
            reset: function () {
                metaDescription = '';
                metaKeywords = '';
            },
            setMetaDescription: function (newMetaDescription) {
                metaDescription = newMetaDescription;
            },
            appendMetaKeywords: function (newKeywords) {
                for (var key in newKeywords) {
                    if (metaKeywords === '') {
                        metaKeywords += newKeywords[key].name;
                    } else {
                        metaKeywords += ', ' + newKeywords[key].name;
                    }
                }
            }
        };
    })

    .factory('CalligraphyAPI', function ($http, $log) {
        var CalligraphyAPI = function (type, tag, baseUrl) {
            this.type = type;
            this.tag = tag;
            this.baseUrl = baseUrl;
            this.items = [];
            this.busy = false;
            this.done = false;
            this.page = 0;
        };
        CalligraphyAPI.prototype.nextPage = function () {
            if (this.busy) return;
            console.log('next page = ' + this.page);
            this.busy = true;
            var url = "http://localhost:8080/api/v1.0/lawhats/type/" + this.type;
            if (this.tag) {
                url += "/tag/" + this.tag;
            }
            url += "?page=" + this.page + "&size=10&sort=dateAdded,desc";
            $log.info('url: ' + url);
            $http.get(url).success(function (data) {
                var lawhat = data.content;
                if (lawhat.length == 0) {
                    this.done = true;
                    this.busy = false;
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

    .factory('breadcrumbs', ['$rootScope', '$location', '$log', function ($rootScope, $location, $log) {
        var breadcrumbs = [];
        var breadcrumbsService = {};

        // we want to update breadcrumbs only when a route is actually changed
        // as $location.path() will get updated immediatelly (even if route change fails!)
        $rootScope.$on('$routeChangeSuccess', function (event, current) {

            var pathElements = $location.path().split('/'), result = [], i;
            var breadcrumbPath = function (index) {
                return '/app/#/' + (pathElements.slice(0, index + 1)).join('/');
            };

            pathElements.shift();
            for (i = 0; i < pathElements.length; i++) {
                result.push({name: pathElements[i], path: breadcrumbPath(i)});
            }

            breadcrumbs = result;
        });

        breadcrumbsService.getAll = function () {
            return breadcrumbs;
        };

        breadcrumbsService.getFirst = function () {
            return breadcrumbs[0] || {};
        };

        return breadcrumbsService;
    }])
;