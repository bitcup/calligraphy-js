'use strict';

angular.module('myApp.view3', ['ngRoute', 'infinite-scroll', 'masonry'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view3', {
            templateUrl: 'view3/view3.html',
            controller: 'View3Ctrl'
        });
    }])

    .factory('Reddit', function ($http) {
        var Reddit = function () {
            this.items = [];
            this.busy = false;
            this.after = '';
        };
        Reddit.prototype.nextPage = function () {
            if (this.busy) return;
            var statics = [
                'http://wall.arabiccalligraphy.com/static/lawha/detail/2013/06/dplv9ThUqQ.jpg',
                'http://wall.arabiccalligraphy.com/static/lawha/detail/2013/06/dplv9ThUqQ.jpg',
                'http://wall.arabiccalligraphy.com/static/lawha/detail/2012/02/Z6cdAasf7w.jpg',
                'http://wall.arabiccalligraphy.com/static/lawha/detail/2013/06/Fo7Tobvuad.jpg',
                'http://wall.arabiccalligraphy.com/static/lawha/detail/2013/02/v7KPd8rUpI.jpg',
                'http://wall.arabiccalligraphy.com/static/lawha/detail/2012/02/SD2me0GQM9.jpg',
                'http://www.arabiccalligraphy.com/static/gallery/slide/yadu.png',
                'http://www.arabiccalligraphy.com/static/gallery/slide/ta3allam.png',
                'http://www.arabiccalligraphy.com/static/gallery/slide/af3al2.png',
            ];
            function genBrick() {
                //var width = ~~(Math.random() * 300) + 100;
                //var height = ~~(Math.random() * 300) + 200;
                //return 'http://placehold.it/' + 350 + 'x' + height;
                var index = ~~(Math.random() * statics.length);
                return statics[index];
            }

            this.busy = true;

            var url = "http://api.reddit.com/hot?after=" + this.after + "&jsonp=JSON_CALLBACK";
            $http.jsonp(url).success(function (data) {
                var items = data.data.children;
                for (var i = 0; i < items.length - 20; i++) {
                    this.items.push({'src': genBrick(), 'title': '"' + items[i].data.title + '"'});
                }
                this.busy = false;
            }.bind(this));
        };
        return Reddit;
    })


    .controller('View3Ctrl', function ($scope, Reddit) {
        $scope.reddit = new Reddit();
    })

;