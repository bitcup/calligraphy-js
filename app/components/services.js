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
            $log.info('url: ' + url);
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
;