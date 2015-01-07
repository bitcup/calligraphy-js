'use strict';

angular.module('calligraphyApp.kamel', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/kamel', {
            templateUrl: 'views/kamel/kamel.html',
            controller: 'KamelCtrl'
        }).when('/kamel/:tag', {
            templateUrl: 'views/kamel/kamel.html',
            controller: 'KamelCtrl'
        });
    }])

    .controller('KamelCtrl', function ($scope, $routeParams, PageTitle, MetaInfo, CalligraphyAPI) {
        PageTitle.setTitle('Arabic Calligraphy - Kamel El-Baba');
        MetaInfo.setMetaDescription("Gallery of calligrapher Kamel El-Baba.  Featuring classic Arabic calligraphy styles of Thuluth and Farsi in traditional arrangements.");
        MetaInfo.setMetaKeywords("arabic,islamic,calligraphy,art,script,font,art galleries,kamel,mokhtar,baba,el-baba,arab,muslim,artwork,graphics,middle east,culture,ethnic,calligraphic,arabic language,arabic script,arabian,allah,mohammad,mohamad,muhammad,muhamad,mohamed,wedding invitation,logo design,lebanon,tattoo,graffiti");

        var infoMap = [
            { tag: null, url: "kamel-about.html"}
        ];
        $scope.api = new CalligraphyAPI('KAMEL', $routeParams.tag, 'kamel', infoMap);

        $scope.htmlReady();
    })

;