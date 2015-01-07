'use strict';

angular.module('calligraphyApp.mokhtar', ['ngRoute', 'infinite-scroll', 'masonry'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/mokhtar', {
            templateUrl: 'views/mokhtar/mokhtar.html',
            controller: 'MokhtarCtrl'
        }).when('/mokhtar/:tag', {
            templateUrl: 'views/mokhtar/mokhtar.html',
            controller: 'MokhtarCtrl'
        });
    }])

    .controller('MokhtarCtrl', function ($scope, $routeParams, PageTitle, MetaInfo, CalligraphyAPI) {
        PageTitle.setTitle('Arabic Calligraphy - Mokhtar El-Baba');
        MetaInfo.setMetaDescription("Gallery of calligrapher Mokhtar El-Baba.  Featuring traditional and modern Arabic calligraphy styles, including abstract Hurufiyyat pieces.");
        MetaInfo.setMetaKeywords("arabic,islamic,calligraphy,art,script,font,art galleries,kamel,mokhtar,baba,el-baba,arab,muslim,artwork,graphics,middle east,culture,ethnic,calligraphic,arabic language,arabic script,arabian,allah,mohammad,mohamad,muhammad,muhamad,mohamed,wedding invitation,logo design,lebanon,tattoo,graffiti");

        var infoMap = [
            { tag: null, url: "mokhtar-about.html"},
            { tag: "hurufiyyat", url: "mokhtar-hurufiyyat.html"}
        ];
        $scope.api = new CalligraphyAPI('MOKHTAR', $routeParams.tag, 'mokhtar', infoMap);

        $scope.htmlReady();
    })

;