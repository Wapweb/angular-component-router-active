(function(angular) {
    'use strict';

    if (!angular) {
        throw new Error('angular-component-router-active: angular required');
    }

    angular
        .module('wapweb.componentRouterActive', [])
        .directive('routerActive', routerActive);


    function routerActive($rootScope, $rootRouter, $parse) {
        return {
            restrict: 'A',
            require: '?^^ngOutlet',
            link: function (scope, element, attrs, ctrl) {
                var router = (ctrl && ctrl.$$router) || $rootRouter;
                if (!router) {
                    return;
                }

                var link = findNgLink();

                var routeParamsGetter = $parse(link);
                var params = routeParamsGetter(scope);
                var instruction = router.generate(params);
                var className = attrs.routerActive || 'active';

                var off = $rootScope.$on('$routeChangeSuccess', function () {
                    var isActive = router.isRouteActive(instruction);

                    if (isActive) {
                        element.addClass(className);
                    } else {
                        element.removeClass(className);
                    }
                });

                scope.$on('$destroy', off);

                function findNgLink() {
                    var result = '';
                    if (attrs.ngLink)
                        return attrs.ngLink;

                    var link = angular.element(element[0].querySelector('[ng-link]'));
                    if (link) {
                        var ngLink = link[0].attributes['ng-link'];

                        if (ngLink)
                            result = ngLink.value;
                    }

                    return result;
                }
            }
        };
    }

    routerActive.$inject = ['$rootScope', '$rootRouter', '$parse'];
})(angular);