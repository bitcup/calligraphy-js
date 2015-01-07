'use strict';

angular.module('calligraphyApp.what', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/about', {
            templateUrl: 'views/about/about.html',
            controller: 'AboutCtrl'
        });
    }])

    .controller('AboutCtrl', function ($scope, PageTitle, MetaInfo) {
        PageTitle.setTitle('Arabic Calligraphy - About');
        // todo - about
        MetaInfo.setMetaDescription("");
        MetaInfo.setMetaKeywords("arabic,islamic,calligraphy,art,script,font,art galleries,kamel,mokhtar,baba,el-baba,arab,muslim,artwork,graphics,middle east,culture,ethnic,calligraphic,arabic language,arabic script,arabian,allah,mohammad,mohamad,muhammad,muhamad,mohamed,wedding invitation,logo design,lebanon,tattoo,graffiti");

        $scope.htmlReady();
    })

;