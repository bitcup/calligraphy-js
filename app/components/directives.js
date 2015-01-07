'use strict';

angular.module('calligraphyDirectives', [])

    // this directive collapses bootstrap menu
    // taken from angular-ui-bootstrap collapse directive (minus transition)
    .directive('collapse', [function () {
        return {
            link: function (scope, element, attrs) {

                var initialAnimSkip = true;

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

    .directive('lawhaTile', function () {
        return {
            restrict: 'E',
            scope: false,
            templateUrl: 'partials/tile.html?i=1'
        }
    })

;
