(function () {
    'use strict';

    angular.module('breadcrumbs').component('breadcrumbs', {
        templateUrl: 'templates/breadcrumbs.template.html',
        controller: 'BreadcrumbsController',
        controllerAs: '$ctrl',
    });
})();