'use strict';

angular.module('calligraphyApp.home', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'views/home/home.html',
            controller: 'HomeCtrl'
        });
    }])

    .controller('HomeCtrl', function ($scope, $routeParams, PageTitle, MetaInfo, CalligraphyAPI) {
        PageTitle.setTitle('Arabic Calligraphy - Home');
        MetaInfo.setMetaDescription("Welcome to ArabicCalligraphy.com, home of Arabic and Islamic calligraphy on the internet by famous calligraphers such as Mokhtar and Kamel El-Baba.");
        MetaInfo.setMetaKeywords("arabic,islamic,calligraphy,art,script,font,art galleries,kamel,mokhtar,baba,el-baba,arab,muslim,artwork,graphics,middle east,culture,ethnic,calligraphic,arabic language,arabic script,arabian,allah,mohammad,mohamad,muhammad,muhamad,mohamed,wedding invitation,logo design,lebanon,tattoo,graffiti");

        $scope.htmlReady();
    })

;