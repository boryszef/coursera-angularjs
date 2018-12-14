(function () {
    'use strict';

    angular.module('breadcrumbs').service('BreadcrumbsService', BreadcrumbsService);

    function BreadcrumbsService() {
        var service = this;
        service.trace = [];

        service.setPath = function (path) {
            service.trace = path.map(function(node) { return node['name'] });
        };

        service.getPath = function () {
            return service.trace;
        }
    }
})();