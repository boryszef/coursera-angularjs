(function () {
    'use strict';

    angular.module('breadcrumbs').controller('BreadcrumbsController', BreadcrumbsController);

    BreadcrumbsController.$inject = ['BreadcrumbsService'];
    function BreadcrumbsController(BreadcrumbsService) {
        var $ctrl = this;
        $ctrl.trace = BreadcrumbsService.getPath();
    }
})();