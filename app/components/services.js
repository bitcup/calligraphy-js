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

    .factory('CalligraphyAPI', function ($http, $log, myConfig) {
        var CalligraphyAPI = function (type, tag, baseUrl, infoMap) {
            this.type = type;
            this.tag = tag;
            this.baseUrl = baseUrl;
            this.items = [];
            this.busy = false;
            this.done = false;
            this.page = 0;
            this.infoMap = infoMap;
        };
        CalligraphyAPI.prototype.nextPage = function () {
            if (this.busy) return;
            console.log('next page = ' + this.page);
            this.busy = true;
            var url = myConfig.apiUrl + "/api/v1.0/lawhats/type/" + this.type;
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
                    // add tile with info url in it, if any
                    if (this.items.length == 0) {
                        var infoLawha = {};
                        for (var i = 0; i < this.infoMap.length; i++) {
                            if (this.infoMap[i].tag == this.tag) {
                                infoLawha.templateUrl = "partials/" + this.infoMap[i].url;
                                break;
                            }
                        }
                        if (infoLawha.templateUrl) {
                            this.items.push(infoLawha);
                        }
                    }
                    for (var j = 0; j < lawhat.length; j++) {
                        this.items.push(lawhat[j]);
                    }
                    this.page += 1;
                    this.busy = false;
                }
            }.bind(this));
        };
        return CalligraphyAPI;
    })
;